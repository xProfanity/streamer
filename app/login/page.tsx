import {redirect} from "next/navigation"

import LoginButton from "@/components/login_link"
import {signIn} from "@/lib/auth"

export default function Login() {

    const login = async () => {
        "use server"
        const {data, error} = await signIn.social({
            provider: "google",
            errorCallbackURL: "/login/error",
            newUserCallbackURL: "/login/welcome",
            callBackURL: "/"
        })

        console.log("data", data)
        console.log("error", error)

        redirect(data.url)

    }

    return (
        <div className="w-full flex flex-row gap-4 items-center justify-center">
            <LoginButton handleLogin={login}>Click here to Sign in to Google</LoginButton>
        </div>
    )
}
