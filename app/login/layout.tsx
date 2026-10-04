import React from "react"

interface Props {
    children: React<ReactNode>
}

export default function Login({children}: Props) {
    return (
        <div className="min-w-full min-h-screen flex flex-col justify-center items-center">
            <div className="h-auto p-20">
                <h1 className="text-sky-400 text-7xl font-header pb-10">The Streamer app</h1>
                <main>{children}</main>
            </div>
        </div>
    )
}
