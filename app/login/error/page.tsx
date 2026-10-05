import Link from "next/link"

export default function Error() {
   return (
       <div className="w-full text-center">
        <p className="text-lg text-cyan-500">Error signing in, <Link href="/login" className="underline underline-offset-2">go back</Link></p>
       </div>
   ) 
}
