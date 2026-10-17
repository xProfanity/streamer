import { betterAuth } from "better-auth";
import {createAuthClient} from "better-auth/react"

import {Pool} from "pg"

export const auth = betterAuth({
    database: new Pool({
		database: 'streamer',
		user: 'postgres',
		port: 5432,
		ssl: process.env.NODE_ENV === "production",
		max: 20, 
		idleTimeoutMillis: 1000,
		connectionTimeoutMillis: 1000, 
		maxUses: 7500,
    }),
    socialProviders: {
        google: {
            prompt: "select_account",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CAN_SUGMA_DIG
        }
    },
    user: {
        modelName: "users",

        additionalFields: {
            username: {
                type: "string",
                required: false,
                unique: true,
                input: true,
            },
        },
    },
    account: {
        skipStateCookieCheck: true,
        storeStateStrategy: "database"
    }
});

export const {signIn, signOut, useSession, getSession} = createAuthClient()
