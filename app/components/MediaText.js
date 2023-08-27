"use client";

import { styled } from "styled-components";
import Title from "./Title";
import BodyCopy from "./BodyCopy";

const MediaTextSection = styled.section`
	width: 100%;
	display: inline-block;
	position: relative;
`;

const MediaTextContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

const ImageContainer = styled.div`
	width: 50%;
	position: relative;
`;

const ContentContainer = styled.div`
	width: 50%;
	padding: 0 6rem;
	position: relative;
`;
const StyledLink = styled.a``;
const SecondaryContainer = styled.div``;
const SecondContent = styled.p``;

export default function MediaText(props) {
	console.log("media text props: ", props);
	return (
		<MediaTextSection>
			<MediaTextContainer>
			<ImageContainer>
			</ImageContainer>

			<ContentContainer>
				<Title>{props.Title}</Title>
				{props.content}
			</ContentContainer>
			</MediaTextContainer>
		</MediaTextSection>
	);
}
