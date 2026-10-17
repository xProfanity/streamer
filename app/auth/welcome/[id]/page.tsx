import UsernameForm from "../UsernameForm"

import {cookies} from "next/headers"

export default async function Welcome({params}) {

    const {id} = await params

    return (
        <UsernameForm userId={id}/>
    )
}
