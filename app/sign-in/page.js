"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import styled from "styled-components";
import Title from "../components/Title";

const RegisterMainSection = styled.section`
	height: 70vh;
`;
const RegisterFormContainer = styled.div`
	display: grid;
	place-items: center;
	height: 100%;
`;
const InnerContainer = styled.form``;
const FieldGroup = styled.div``;
const StyledInput = styled.input`
	width: 100%;
`;
const StyledButton = styled.button`
	width: 100%;
`;
const SubContent = styled.div`
	display: flex;
	gap: 1rem;
	color: #fff;
`;

const ErrorMessage = styled.p`
	color: white;
`;

export default function SignInPage() {
	const [userData, setUserData] = useState({
		username: "",
		email: "",
		password: "",
	});
	// use error state
	const [error, setError] = useState(null);

	async function handleSignIn(e) {
		e.preventDefault();

		const signIn = await fetch(`${process.env.APP_URL}/api/auth/local`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});
		const signInResponse = await signIn.json();

		if (!register.ok) {
			setError(signInResponse.error.message);
			setTimeout(() => {
				setError(null);
			}, 5000);
			return;
		}

		console.log("sign in data: ", signInResponse);
	}

	async function handleProviderSignIn(e) {
		e.preventDefault();
		signIn("google", {
			userData,
			redirect: false,
			callbackUrl: "/sign-in",
		}).then((response) => {
			console.log("provider sign in response: ", response);
		});
	}

	return (
		<RegisterMainSection>
			<RegisterFormContainer>
				<InnerContainer onSubmit={handleSignIn}>
					<Title>Sign In</Title>
					{error && <ErrorMessage>{error}</ErrorMessage>}
					<FieldGroup>
						<StyledInput
							aria-label="email input"
							name="email"
							type="email"
							placeholder="email"
							required
							onChange={(e) =>
								setUserData({
									...userData,
									username: e.target.value,
									email: e.target.value,
								})
							}
						/>
					</FieldGroup>
					<FieldGroup>
						<StyledInput
							aria-label="password input"
							name="email"
							type="password"
							placeholder="password"
							required
							onChange={(e) =>
								setUserData({
									...userData,
									password: e.target.value,
								})
							}
						/>
					</FieldGroup>
					<StyledButton type="submit" value="Submit">
						Submit
					</StyledButton>
					<hr />
					<div key={`google-provider`}>
						<button onClick={(e) => handleProviderSignIn(e)}>
							Sign in with Google
						</button>
					</div>
					<SubContent>
						<p>Don't have an account?</p>
						<Link href="/">Sign Up</Link>
					</SubContent>
				</InnerContainer>
			</RegisterFormContainer>
		</RegisterMainSection>
	);
}
