"use client";
import { styled } from "styled-components";
import Section from "./Section";
import Title from "./Title";

const HeroContent = styled.div`
	display: grid;
	place-items: center;
`;

export default function Hero() {
	return (
		<Section>
			<HeroContent>
				<Title>Default Hero Title</Title>
			</HeroContent>
		</Section>
	);
}
