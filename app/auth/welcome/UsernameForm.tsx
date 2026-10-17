"use client"

import {useState} from "react"
import axios from "axios"

import {useRouter} from "next/navigation"

export default function UsernameForm({userId}) {

    const [username, setUsername] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleInputChange = (event) => {
        const input_value = event.target.value
        const c = input_value.slice(username.length)

        if(c === " " || c === "-") {
            return setError("Username cannot have space or dash u dumb fuck")
        }

        setUsername(input_value)
    }

    const handleSubmitUsername = async (event) => {
        event.preventDefault()
        const isValid = /^@?(?!\.)(?!.*\.\.)(?!.*\.$)[A-Za-z0-9._]{1,30}$/

        if(!isValid) {
            return setError("1–30 characters A-Z, 0-9, periods, or underscores")
        }

        try {
            await axios.post(`http://localhost:3000/api/user/username/${userId}`, {username})

            router.push("/")
        } catch (error) {
            console.log("error setting username", error)
            setError("get your fuckass skill issues on")
        }
    }

    return (
        <form onSubmit={handleSubmitUsername} className="h-auto justify-center items-center flex flex-col">
            <div className="h-20 w-11/12 mx-auto inline-flex gap-2 items-center border-b border-gray-600">
                <div>
                    <span className="dark:text-gray-400 text-gray-500 font-extrabold text-xl">@</span>
                </div>
                <input
                 className="h-full w-full outline-none text-lg"
                 placeholder="Type in your fuckass username"
                 value={username}
                 onChange={handleInputChange}
                />
            </div>

            <div className="mt-4 w-11/12">
                <p className="dark:text-gray-400 text-gray-500 text-lg">{error}</p>
            </div>


            <div className="mt-10 mx-auto">
                <button className="h-12 w-56 bg-cyan-500 rounded-full mx-auto cursor-pointer outline-none">Continue</button>
            </div>
        </form>
    )
} 
