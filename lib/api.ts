import axios from "axios"

export async function fetchUsername(id: string) {
    try {
        const response = await axios.get(`http://localhost:3000/api/user/username/${id}`)

        const username = response.data.rows.username

        return username
    } catch (error) {
       console.log("error", error) 
    }
} 
