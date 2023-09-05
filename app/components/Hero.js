"use client";
import { styled } from "styled-components";
import Section from "./Section";
import Title from "./Title";

const HeroContent = styled.div`
	display: grid;
	place-items: center;
	height: 100%;
	width: 100%;
	text-align: center;

	& h1 {
		padding: 0 6rem;
	}
`;

export default function Hero(props) {
	return (
		<Section bgimage={`${props.Image.data.attributes.url}`}>
			<HeroContent>
				<Title as="h1" color="white" size="heading" align="center">{props.Title}</Title>
			</HeroContent>
		</Section>
	);
}
