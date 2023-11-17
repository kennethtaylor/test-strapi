import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const options = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_OATH_CLIENT_ID,
			clientSecret: process.env.GOOGLE_OATH_CLIENT_SECRET,
		}),
		AppleProvider({
			clientId: process.env.APPLE_ID,
			clientSecret: process.env.APPLE_SECRET,
		}),
		Credentials({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'John@example.com',
				},
				password: { label: 'Password', type: 'password' },
			},
		}),
	],
	database: process.env.NEXT_PUBLIC_DATABASE_URL,
	session: {
		jwt: true,
	},
	callbacks: {
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
