import { authOptions } from "@/utils/auth"
import NextAuth from "next-auth"


const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }






///// อดีตต้องเขียนแบบนี้นะ
// export const POST = (req) => {}