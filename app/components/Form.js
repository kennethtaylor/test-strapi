"use client";
import styled from "styled-components";
import Image from "next/image";
import Title from "./Title";
import { useEffect, useState } from "react";

const FormContainer = styled.section`
    width: 100%;
    padding: 14rem 6rem 4rem 6rem;

	& p {
		color: var(--white);
		font-family: var(--sans-serif);
		font-size: var(--body);
		margin: 0rem 0 4rem 0;
		font-weight: 400;
		display: block;
		text-align: left;
		max-width: 50%;
	}

	@media screen and (max-width: 820px) {
		padding: 14rem 4rem 4rem 4rem;
	}
	@media screen and (max-width: 600px) {
		padding: 14rem 2rem 4rem 2rem;
	}
`;

const FormInner = styled.form`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

const FieldGroup = styled.div`
    width: 100%;
    position: relative;

    &.thirds{
        width: calc(33.33% - 2rem);
    }
	@media screen and (max-width: 820px) {
		&.thirds{
			width: 100%;
		}
	}

	& ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  		color: var(--white);
		font-family: var(--sans-serif);
		font-size: var(--body);
		font-weight: 400;
	}
	& ::-moz-placeholder { /* Firefox 19+ */
		color: var(--white);
		font-family: var(--sans-serif);
		font-size: var(--body);
		font-weight: 400;
	}
	& :-ms-input-placeholder { /* IE 10+ */
		color: var(--white);
		font-family: var(--sans-serif);
		font-size: var(--body);
		font-weight: 400;
	}
	& :-moz-placeholder { /* Firefox 18- */
		color: var(--white);
		font-family: var(--sans-serif);
		font-size: var(--body);
		font-weight: 400;
	}
`;

const StyledLabel = styled.label`
    color: var(--white);
    font-family: var(--sans-serif);
    width: 100%;
    display: block;
    text-align: left;
	font-weight: 400;
    text-transform: uppercase;
	padding: 0 0 0.5rem 0;
	font-size: var(--body);

	& span {
		color: var(--orange);
	}
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 1rem 1rem;
    border-radius: 2rem;
    background: transparent;
    border: 1px solid var(--white);
	font-size: var(--body);
	font-family: var(--sans-serif);
	color: var(--white);
`;

const StyledTextArea = styled.textarea`
	width: 100%;
	padding: 1rem 1rem;
	border-radius: 1rem;
	min-height: 200px;
	background: transparent;
	border: 1px solid var(--white);
	font-size: var(--body);
	font-family: var(--sans-serif);
	color: var(--white);
`;

const SubmitButton = styled.input`
	width: fit-content;
	width: -webkit-fit-content;
	color: var(--white);
	font-family: var(--sans-serif);
	padding: 1rem 3rem;
	text-transform: uppercase;
	font-size: var(--body);
	background: var(--orange-gradient);
	background: var(--orange-gradient-linear);
	background: var(--orange-gradient-moz);
	background: var(--orange-gradient-webkit);
	appearance: none;
	-webkit-appearance: none;
	border-radius: 2rem;
	border: none;
`;

export default function Form(props) {
    const {
		Title: title,
		Blurb,
        FormType,
    } = props;

    const [formState, setFormState] = useState({
		source: "website",
	});

	const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
		e.preventDefault();

		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

    const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch(
			"https://hooks.zapier.com/hooks/catch/2001353/3s3a7jh/",
			{
				method: "POST",
				body: JSON.stringify(formState),
			}
		);

		handleResponse(res);
	};

    const handleResponse = async (res) => {
		if (res.status === 200) setSuccess(true);

		window.location.href = "/thank-you";
	};

	return (
        <FormContainer>
			<Title
				as="h1"
				color="white"
				size="xlheading"
				weight="medium"
				align="left">
					{title}
			</Title>
			<p>{Blurb}</p>
            {FormType=="contact" && (
                <FormInner onSubmit={handleSubmit}>
                    <FieldGroup className="thirds">
						<StyledLabel htmlFor="firstName">
							First Name <span>*</span>
						</StyledLabel>
						<StyledInput
							id="firstName"
							type="text"
							name="firstName"
							placeholder="First Name"
							onChange={handleChange}
							required
						/>
					</FieldGroup>
                    <FieldGroup className="thirds">
						<StyledLabel htmlFor="lastName">
							Last Name <span>*</span>
						</StyledLabel>
						<StyledInput
							id="lastName"
							type="text"
							name="lastName"
							onChange={handleChange}
							placeholder="Last Name"
							required
						/>
					</FieldGroup>
                    <FieldGroup className="thirds">
						<StyledLabel htmlFor="email">
							Email <span>*</span>
						</StyledLabel>
						<StyledInput
							id="email"
							type="email"
							name="email"
							onChange={handleChange}
							placeholder="johndoe@email.com"
							required
						/>
					</FieldGroup>
                    <FieldGroup>
						<StyledLabel htmlFor="message">
							Message <span>*</span>
						</StyledLabel>
						<StyledTextArea
							id="message"
							name="message"
							required
							onChange={handleChange}
							placeholder="Enter Message Here"></StyledTextArea>
					</FieldGroup>
                    <SubmitButton type="submit" name="submit" value="Submit" />
                </FormInner>
            )}
        </FormContainer>
    );
}