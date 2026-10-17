import {dbClient} from "@/lib/db"

export async function GET(request: Request) {
    const query = "select username from users where id=$1"
    const client = await dbClient()

    client.query({values: ["id"], text: query})

}
