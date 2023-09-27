"use client";
import { useEffect } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BasicSliderSection = styled.section`
	width: 100%;
	display: block;
	position: relative;
	padding: 0px;
`;

const TopGradientLine = styled.div`
	width: 100%;
	height: 0.5px;
	display: block;
	padding: 0;
	background: var( --blue-gradient-linear);
	-moz-background: var( --blue-gradient-moz);
	-webkit-background: var( --blue-gradient-webkit);
`;

const MarqueeContainer = styled.div`
	width: 100%;
	padding: 2rem 0rem;

	& .marquee {
		overflow-x: hidden;
	}
	  
	& .marqueeInner {
		display: inline-flex;
		white-space: nowrap;
	}

	& .box {
		margin: auto 5rem;
		font-size: var(--heading);
		font-family: var(--sans-serif);
		color: var(--white);
		font-weight: 400;
	}
`;

export default function BasicSlider(props) {

	useEffect(() => {
		let wrapWidth = document.querySelector(".marqueeInner").offsetWidth;
		gsap.to(".marqueeInner", {
  			duration: 12,
  			ease: "none",
  			repeat: -1,
  			immediateRender: true,
  			x: `-=${wrapWidth / 2}`,
		});
	}, []);

	return (
		<BasicSliderSection>
			<TopGradientLine></TopGradientLine>
			<MarqueeContainer>
			<div className="marquee">
			<div className="marqueeInner">
				{props.SlideData.map((slide, index) => (
					<div key={`slide-${index}`} className="box">{slide.Title}</div>
				))}
				{props.SlideData.map((slide, index) => (
					<div key={`slide-${index}`} className="box">{slide.Title}</div>
				))}
			</div>
			</div>
			</MarqueeContainer>
		</BasicSliderSection>
	);
}
