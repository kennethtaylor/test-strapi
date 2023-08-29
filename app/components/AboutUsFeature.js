"use client";
import { styled } from "styled-components";
import Section from "./Section";
import Image from "next/image";
import Link from "next/link";

const CircleContainer = styled.div``;

export default function AboutUsFeature(props) {
	return (
		<Section
			anchor="about-us"
			$bgimage={`${props.BGimage.data.attributes.url}`}>
			<CircleContainer
				bgimage={`${props.CircleBGimage.data[0].attributes.url}`}>
				<img
					src={`${props.Logo.data.attributes.url}`}
					alt="Circle"
					width={100}
					height={100}
				/>
				<Link href={props.CTAurl}>{props.CTAtext}</Link>
			</CircleContainer>
		</Section>
	);
}
