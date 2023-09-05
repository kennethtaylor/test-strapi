"use client";

import { styled } from "styled-components";
import Section from "./Section";
import Title from "./Title";
import Image from "next/image";
import BodyCopy from "./BodyCopy";
import Link from "next/link";
import AngledArrow from '../../public/images/icons/angledArrow.svg?url';

const TitleLeftTextCtaRightContainer = styled.section`
	display: flex;
	align-items: flex-start;
	gap: 4rem;
	padding: 6rem 6rem;
	flex-wrap: wrap;
`;
const TitleContainer = styled.div`
	width: calc(40% - 2rem);
	& h2 {
		font-weight: 400;
		font-familu: var(--sans-serif);
	}
`;

const ContentContainer = styled.div`
	width: calc(60% - 2rem);
	padding-top: 6rem;
	& a {
		display: flex;
		width: fit-content;
		width: -webkit-fit-content;
		gap: 0.5rem;
		align-items: flex-start;
		border: 1px solid var(--white);
		border-radius: 1.5rem;
		padding: 0.7rem 1rem;
		color: var(--white);
		transition: 0.3s ease all;
	}
	& a span {
		font-family: var(--sans-serif);
		font-weight: 600;
		font-size: var(--nav);
		text-transform: uppercase;
	}
	& a:hover {
		border: 1px solid var(--orange);
	}
`;
const Content = styled.div`
	font-size: var(--body);
	color: var(--white);
	font-family: var(--sans-serif);
	line-height: 1.5;
	margin-bottom: 2rem;
`;

export default function TitleLeftTextCtaRight(props) {
	return (
		<TitleLeftTextCtaRightContainer>
			<TitleContainer>
				<Title as="h2" size="quote" color="white">{props.Title}</Title>
			</TitleContainer>
			<ContentContainer>
				<Content dangerouslySetInnerHTML={{ __html: props.Content }} />
				<Link href={props.CTAurl}><span>{props.CTAtext}</span><Image src={AngledArrow} alt="angled arrow" width={15} height={15}/></Link>
			</ContentContainer>
		</TitleLeftTextCtaRightContainer>
	);
}
