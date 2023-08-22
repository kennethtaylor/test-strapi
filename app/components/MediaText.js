"use client";

import { styled } from "styled-components";
import Title from "./Title";
import BodyCopy from "./BodyCopy";

const MediaTextSection = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;
const ImageContainer = styled.div``;
const StyledLink = styled.a``;
const SecondaryContainer = styled.div``;
const SecondContent = styled.p``;

export default function MediaText(props) {
	console.log("media text props: ", props);
	return (
		<MediaTextSection>
			<Title>{props.Title}</Title>
			{props.content}
		</MediaTextSection>
	);
}
