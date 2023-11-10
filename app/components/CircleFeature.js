"use client";
import styled from "styled-components";
import Image from "next/image";

const CircleFeatureSection = styled.section`
    width: 100%;
    height: 80vh;
    background-image: url(${(props) => `${props.bgimage}`});
    background-size: cover !important;
	-webkit-background-size: cover !important;
	-moz-background-size: cover !important;
	-o-background-size: cover !important;
	background-position: center;
	background-repeat: no-repeat;
    display: block;
    position: relative;
    overflow: hidden;
    margin: 6rem 0 0rem 0;
`;
const Circle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(1,4,60,0.7);
    transform: translate(-50%, -50%);
    height: 100%;
    border-radius: 50%;
    z-index: 1;
    aspect-ratio: 1 / 1;

    @media only screen and (max-width: 1024px) {
        & {
            width: 95%;
            height: unset;
        }
    }
`;
const InnerText = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: calc(40% * 1);
    transform: translate(-50%, -50%);
    color: var(--white);
    padding: 0 4rem;
    font-family: var(--sans-serif);
    font-size: var(--quote);
    font-weight: 400;
    z-index: 2;
    text-align: center;

    @media only screen and (max-width: 1024px) {
        & {
            max-width: calc(70% * 1);
            padding: 0;
        }
    }
    @media only screen and (max-width: 600px) {
        & {
            max-width: 75%;
            width: 100%;
            font-size: 1.5rem;
        }
    }
`;

export default function CircleFeature(props) {
    const {
        Content,
    } = props;

	return (
		<CircleFeatureSection bgimage={`${props?.BackgroundImage?.data?.attributes?.url}`}>
			<InnerText>
                {Content}
            </InnerText>
            <Circle></Circle>
		</CircleFeatureSection>
	);
}