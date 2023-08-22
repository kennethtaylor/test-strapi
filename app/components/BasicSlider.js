"use client";

import { styled } from "styled-components";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { useRef } from "react";

const BasicSliderSection = styled.section`
	padding-block: 2rem;
`;

const Word = styled.article`
	font-size: 5rem;
	color: black;
	padding-right: 5rem;
	vertical-align: middle;
`;

export default function BasicSlider(props) {
	const slider = useRef(null);
	return (
		<BasicSliderSection>
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
		</BasicSliderSection>
	);
}
