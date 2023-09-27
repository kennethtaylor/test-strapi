"use client";
import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import AngledArrow from "../../public/images/icons/angledArrow.svg?url";

const AboutFeatureContainer = styled.section`
	width: 100%;
	height: 80vh;
	position: relative;
	background: url(${(props) => props.bgimage}) no-repeat center center;
	background-size: cover !important;
	-webkit-background-size: cover !important;
	-moz-background-size: cover !important;
	-o-background-size: cover !important;
`;

const CircleContainer = styled.div`
	width: 100%;
	height: 100%;
	top: 0px;
	z-index: 1;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background: url(${(props) => props.bgimage}) no-repeat center center;
	background-size: contain !important;
	-webkit-background-size: contain !important;
	-moz-background-size: contain !important;
	-o-background-size: contain !important;
`;

const InnerContainer = styled.div`
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
	z-index: 2;

	& img.logoMark {
		display: block;
		margin: 0 auto 4rem auto;
		width: 100%;
		max-width: calc(80% * 1);
		height: auto;
	}
	@media only screen and (max-width: 820px){
		& img.logoMark {
			max-width: calc(60% * 1);
			margin: 0 auto 2rem auto;
		}
	}
`;

export default function AboutUsFeature(props) {
	return (
		<AboutFeatureContainer
			anchor="about-us"
			bgimage={`${props?.BGimage?.data?.attributes?.url}`}>
			<CircleContainer
				bgimage={`${props.CircleBGimage.data[0].attributes.url}`}>
				<InnerContainer>
					<Image
						src={`${props.Logo.data.attributes.url}`}
						alt="Circle"
						width={100}
						height={100}
						className="logoMark"
					/>
					<Link className="primaryBtnWhite" href={props.CTAurl}>
						<span>{props.CTAtext}</span>
						<Image
							src={AngledArrow}
							alt="angled arrow"
							width={15}
							height={15}
						/>
					</Link>
				</InnerContainer>
			</CircleContainer>
		</AboutFeatureContainer>
	);
}
