"use client";

import { styled } from "styled-components";
import Section from "./Section";
import Title from "./Title";
import BodyCopy from "./BodyCopy";
import Link from "next/link";

const TitleLeftTextCtaRightContainer = styled.section`
	display: grid;
	grid-template-columns: 1fr 2fr;
`;
const TitleContainer = styled.div``;
const ContentContainer = styled.div``;
const Content = styled.div``;

export default function TitleLeftTextCtaRight(props) {
	return (
		<TitleLeftTextCtaRightContainer>
			<TitleContainer>
				<Title>{props.Title}</Title>
			</TitleContainer>
			<ContentContainer>
				<Content dangerouslySetInnerHTML={{ __html: props.Content }} />
				<Link href={props.CTAurl}>{props.CTAtext}</Link>
			</ContentContainer>
		</TitleLeftTextCtaRightContainer>
	);
}
