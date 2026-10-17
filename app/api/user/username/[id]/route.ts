import {dbClient} from "@/lib/db"

export async function GET(request: Request, {params}: RouteContext) {
    const query = "select username from users where id=$1"
    const client = await dbClient()
    const {id} = await params

    try {
        const result = await client.query({values: [id], text: query})
        const rows = result.rows[0]

        return Response.json({rows}, {status: 201})
    } catch (error) {
        console.error("error fetching username")
        return Response.json({message: "error fetching username", error}, {status: 401})
    } finally {
        client.release()
    }
}

export async function POST(request: Request, {params}: RouteContext) {
    const {id} = await params
    const client = await dbClient()

    const {username} = await request.json()

    const query = `update users set username=$2 where id=$1`

    try {
        await client.query({text: query, values: [id, username]})

        return Response.json({message: "updated username successfully"}, {status: 201})
    } catch (error) {
        console.error("error setting username")
        return Response.json({message: "error setting username", error}, {status: 401})
    } finally {
        client.release()
    }
}
