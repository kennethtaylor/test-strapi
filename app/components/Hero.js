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

const TwoColumn = styled.div``;

export default function Hero(props) {
	switch (props.type) {
		case "Home":
			return (
				<Section
					anchor="#hero"
					$bgimage={`${props.Image.data.attributes.url}`}>
					<HeroContent>
						<Title>{props.Title}</Title>
					</HeroContent>
				</Section>
			);
		case "Post - Archive":
			return (
				<Section
					anchor="#hero"
					bgimage={`${props.Image.data.attributes.url}`}>
					<HeroContent>
						<Title>{props.Title}</Title>
					</HeroContent>
				</Section>
			);
		case "Post - Single":
	}
}
