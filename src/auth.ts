import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
// import Google from "next-auth/providers/google"
 
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub],
  // providers: [GitHub, Google],
  callbacks: {
    session({ session, user }) {
      // session.user.id = user.id
      return session
    },
  },
})