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
`;

const ContentContainer = styled.div`
	width: 50%;
	padding: 0 6rem;
	position: relative;
`;
const StyledLink = styled.a``;
const SecondaryContainer = styled.div``;
const SecondContent = styled.p``;

export default function MediaText(props) {
	return (
		<MediaTextSection>
			<MediaTextContainer>
				<ImageContainer></ImageContainer>

				<ContentContainer>
					<Title color="darkblue" size="quote" weight="medium" as="h2">{props.Title}</Title>
					{props.Content}
					<Link className="primaryBtnBlue" href={props.MainCTAurl}><span>{props.MainCTAText}</span><Image src={AngledArrowBlue} alt="angled arrow" width={15} height={15}/></Link>
				</ContentContainer>
			</MediaTextContainer>
		</MediaTextSection>
	);
}
