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
			bgimage={`${process.env.APP_URL}${props.BGimage.data.attributes.url}`}>
			<CircleContainer
				bgimage={`${process.env.APP_URL}${props.CircleBGimage.data[0].attributes.url}`}>
				<Image
					src={`${process.env.APP_URL}${props.Logo.data.attributes.url}`}
					alt="Circle"
					width={100}
					height={100}
				/>
				<Link href={props.CTAurl}>{props.CTAtext}</Link>
			</CircleContainer>
		</Section>
	);
}
