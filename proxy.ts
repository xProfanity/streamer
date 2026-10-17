import { headers } from "next/headers"
import {cookies} from "next/headers"

import {fetchUsername} from "@/lib/api"
import { auth } from "@/lib/auth" 

export async function proxy(request: Request) {

    const cookieStore = await cookies()

    const session = await auth.api.getSession({
        headers: await headers()  
    })

    if(!session) {
        return Response.redirect(new URL("/auth/login", request.url))
    }

    const {id, name, image, email} = session.user


    const username = await fetchUsername(id)

    if(!username) return Response.redirect(new URL(`/auth/welcome/${id}`, request.url))
        
    cookieStore.set("sup_fucktard", {
        id, name, image, email, username 
    }, {
        httpOnly: true
    })

}

export const config = {
  matcher: [
    '/((?!api|auth|_next/static|_next/image|.*\\.png$).*)',
  ],
}
