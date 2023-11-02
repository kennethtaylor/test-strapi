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
	padding: 10rem 8rem 12rem 8rem;
	flex-wrap: wrap;

	@media only screen and (max-width: 820px) {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			gap: 2rem;
			padding: 10rem 4rem 12rem 4rem;
	}
`;
const TitleContainer = styled.div`
	width: calc(40% - 2rem);

	& h2 {
		font-family: var(--sans-serif);
		line-height: 1.2;
	}
	@media only screen and (max-width: 820px) {
		width: 100%;
	}
`;

const ContentContainer = styled.div`
	width: calc(60% - 2rem);
	padding-top: 6rem;
	line-height: 1.5;

	@media only screen and (max-width: 820px) {
			width: 100%;
			padding-top: unset;
			padding: 0rem 0rem 0rem 4rem;
	}
	@media only screen and (max-width: 600px) {
		padding: 0rem 0rem 0rem 2rem;
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
			<TitleContainer data-speed="1.2">
				<Title as="h2" weight="medium" size="quote" color="white">{props.Title}</Title>
			</TitleContainer>
			<ContentContainer data-speed="1.25">
				<Content dangerouslySetInnerHTML={{ __html: props.Content }} />
				<Link className="primaryBtnWhite" href={props.CTAurl}><span>{props.CTAtext}</span><Image src={AngledArrow} alt="angled arrow" width={15} height={15}/></Link>
			</ContentContainer>
		</TitleLeftTextCtaRightContainer>
	);
}
