"use client";

import { styled } from "styled-components";
import Title from "./Title";
import BodyCopy from "./BodyCopy";
import Image from "next/image";
import Link from "next/link";
import AngledArrowBlue from '../../public/images/icons/angledArrowBlue.svg?url';

const MediaTextSection = styled.section`
	width: 100%;
	display: inline-block;
	background: var(--white);
	position: relative;
`;

const MediaTextContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

const ImageContainer = styled.div`
	width: 50%;
	position: relative;
	overflow: hidden;

	& img {
		width: 100%;
		max-width: 100%;
		height: auto;
	}
`;

const ContentContainer = styled.div`
	width: 50%;
	padding: 0 6rem;
	position: relative;
`;
const StyledLink = styled.a``;
const SecondaryContainer = styled.div``;
const BodyContainer = styled.div`
	padding: 2rem 0;
	line-height: 1.5;
`;

export default function MediaText(props) {
	return (
		<MediaTextSection>
			<MediaTextContainer>
				<ImageContainer>
				<Image
					src={`${props.ImageVideo.data.attributes.url}`}
					alt=""
					width={882}
					height={723}
				/>
				</ImageContainer>

				<ContentContainer>
					<Title color="darkblue" size="quote" weight="medium" as="h2">{props.Title}</Title>
					<BodyContainer>{props.Content}</BodyContainer>
					<Link className="primaryBtnBlue" href={props.MainCTAurl}><span>{props.MainCTAText}</span><Image src={AngledArrowBlue} alt="angled arrow" width={15} height={15}/></Link>
				</ContentContainer>
			</MediaTextContainer>
		</MediaTextSection>
	);
}
