"use client";

import { styled } from "styled-components";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { useRef } from "react";

const BasicSliderSection = styled.section`
	width: 100%;
	display: inline-block;
	position: relative;
`;

const TopGradientLine = styled.div`
	width: 100%;
	height: 0.5px;
	display: block;
	background: var( --blue-gradient-linear);
	background: var( --blue-gradient-moz);
	background: var( --blue-gradient-webkit);
`;
const MarqueeContainer = styled.div`
	width: 100%;
	padding: 2rem 0rem;
`;
const Word = styled.p`
	font-size: var(--heading);
	font-family: var(--sans-serif);
	color: var(--white);
	font-weight: 400;
	padding-right: 5rem;
	vertical-align: middle;
`;

export default function BasicSlider(props) {
	const slider = useRef(null);
	return (
		<BasicSliderSection>
			<TopGradientLine></TopGradientLine>
			<MarqueeContainer>
			<Flickity
				options={{
					cellAlign: "left",
					prevNextButtons: true,
					pageDots: false,
					prevNextButtons: false,
					draggable: true,
					wrapAround: true,
				}}
				flickityRef={(c) => {
					slider.current = c;
				}}>
				{props.SlideData.map((slide, index) => (
					<Word key={`slide-${index}`}>{slide.Title}</Word>
				))}
			</Flickity>
			</MarqueeContainer>
		</BasicSliderSection>
	);
}
