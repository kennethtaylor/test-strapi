import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
	NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_OATH_CLIENT_ID,
			clientSecret: process.env.GOOGLE_OATH_CLIENT_SECRET,
		}),
		CredentialsProvider({
			name: "Email",
			credentials: {
				email: {
					label: "Email",
					type: "text",
					placeholder: "example@example.com",
				},
				password: { label: "Password", type: "password" },
				username: { label: "Username", type: "text" },
			},
			async authorize(credentials, req) {
				/**
				 * This function is used to define if the user is authenticated or not.
				 * If authenticated, the function should return an object contains the user data.
				 * If not, the function should return `null`.
				 */
				if (credentials == null) return null;
				/**
				 * credentials is defined in the config above.
				 * We can expect it contains two properties: `email` and `password`
				 */
				try {
					const { user, jwt } = await signIn({
						email: credentials.email,
						password: credentials.password,
					});
					return { ...user, jwt };
				} catch (error) {
					// Sign In Fail
					return null;
				}
			},
		}),
	],
	database: process.env.NEXT_PUBLIC_DATABASE_URL,
	session: {
		jwt: true,
	},
	callbacks: {
		signIn: async (user, account, profile) => {
			console.log("user: ", user);
			console.log("account: ", account);
			console.log("profile: ", profile);
			return Promise.resolve(true);
		},
		session: async (session, user) => {
			session.jwt = user.jwt;
			session.id = user.id;
			return Promise.resolve(session);
		},
		jwt: async (token, user, account) => {
			const isSignIn = user ? true : false;
			if (isSignIn) {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
				);
				const data = await response.json();
				token.jwt = data.jwt;
				token.id = data.user.id;
			}
			return Promise.resolve(token);
		},
	},
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
