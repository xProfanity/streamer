import UsernameForm from "./UsernameForm"

import {cookies} from "next/headers"

export default async function Welcome() {

    const cookieStore = await cookies()

    const user = cookieStore.get("sup_fucktard")

    console.log("munchitoes", user)

    return (
        <UsernameForm />
    )
}
