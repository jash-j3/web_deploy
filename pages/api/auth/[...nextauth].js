import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "326421674064-uk2v0eocm7tv8isai0269r4ilp4m3svf.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  secret: "rS3NMgSb9aiuu0FAqDWNg6ok0w65vx+ItawZgoJyEgQ=",
});
