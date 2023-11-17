import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import AppleProvider from 'next-auth/providers/apple';

const options = {
	NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_OATH_CLIENT_ID,
			clientSecret: process.env.GOOGLE_OATH_CLIENT_SECRET,
		}),
		AppleProvider({
			clientId: process.env.APPLE_ID,
			clientSecret: process.env.APPLE_SECRET,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'John@example.com',
				},
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'jsmith',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password) return null;

				try {
					const signIn = await fetch(
						`${process.env.APP_URL}/api/auth/local`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								identifier: credentials.email,
								password: credentials.password,
							}),
						}
					);

					if (!signIn.ok) throw new Error(await signIn.text());

					return await signIn.json();
				} catch (error) {
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
			console.log('user: ', user);
			console.log('account: ', account);
			console.log('profile: ', profile);
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
