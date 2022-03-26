import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
})

/*
    /api/auth/login
    /api/auth/logout
    /api/auth/register
    /api/auth/callback
 */
