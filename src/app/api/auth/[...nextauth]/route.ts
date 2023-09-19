import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDB } from '@/lib/mongoose'
import User from '@/lib/models/user.model'

connectToDB()

export const authOptions: AuthOptions = {
  providers: [],

  // pages: {
  //   signIn: '/sign-in',
  // },

  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true
  //   },
  //   async jwt({ token, trigger, session }) {
  //     return token
  //   },
  //   async session({ session, token }) {
  //     return session
  //   },
  // },

  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
