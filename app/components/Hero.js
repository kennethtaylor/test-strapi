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
`;

export default function Hero(props) {
	return (
		<Section
			anchor="#hero"
			bgimage={`http://localhost:1337${props.Image.data.attributes.url}`}>
			<HeroContent>
				<Title>{props.Title}</Title>
			</HeroContent>
		</Section>
	);
}
