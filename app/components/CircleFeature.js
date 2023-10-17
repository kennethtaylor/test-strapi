"use client";
import styled from "styled-components";
import Image from "next/image";

const CircleFeatureSection = styled.section`
    width: 100%;
    height: 60vh;
    background-image: url(${(props) => `${props.bgimage}`});
    background-size: cover !important;
	-webkit-background-size: cover !important;
	-moz-background-size: cover !important;
	-o-background-size: cover !important;
	background-position: center;
	background-repeat: no-repeat;
    display: block;
    position: relative;
`;
const InnerContainer = styled.div``;

export default function CircleFeature(props) {
    const {
        Content,
    } = props;

	return (
		<CircleFeatureSection bgimage={`${props?.BackgroundImage?.data?.attributes?.url}`}>
			<InnerContainer>{Content}</InnerContainer>
		</CircleFeatureSection>
	);
}