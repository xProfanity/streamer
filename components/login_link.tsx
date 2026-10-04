"use client"

import React from "react"

interface Props {
    handleLogin: () => void
    text: React<ReactNode>
}

export default function TextButton({handleLogin, children}: Props) {

    return (
        <button onClick={handleLogin} className="text-cyan-500 cursor-pointer hover:underline underline-offset-2 text-lg">{children}</button>
    )
}
