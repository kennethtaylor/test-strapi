"use client";

import { styled } from "styled-components";
import Title from "./Title";
import BodyCopy from "./BodyCopy";
import Image from "next/image";
import Link from "next/link";
import AngledArrow from "../../public/images/icons/angledArrow.svg?url";
import AngledArrowBlue from "../../public/images/icons/angledArrowBlue.svg?url";

const MediaTextSection = styled.section`
	width: 100%;
	display: block;
	background: var(--white);
`;

const MediaTextContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	@media only screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

const ImageContainer = styled.div`
	width: 50%;
	max-width: 50%;
	position: relative;
	overflow: hidden;

	& img {
		width: 100%;
		max-width: 100%;
		height: auto;
	}
	@media only screen and (max-width: 820px) {
		& {
			width: 100%;
			max-width: 100%;
		}
	}
`;

const ContentContainer = styled.div`
	width: 50%;
	padding: 0 6rem;
	position: relative;

	@media only screen and (max-width: 820px) {
		& {
			width: 100%;
			padding: 4rem 4rem;
		}
	}
`;
const StyledLink = styled.a``;

const SecondaryContainer = styled.div`
	padding: 2rem 0 0 0;
	font-family: var(--sans-serif);
	font-size: var(--body);
	color: var(--darkblue);
	font-size: var(--nav);
`;

const BodyContainer = styled.div`
	padding: 2rem 0;
	line-height: 1.5;
	font-family: var(--sans-serif);
	font-size: var(--body);
	color: var(--darkblue);
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
					<Title
						color="darkblue"
						size="quote"
						weight="medium"
						as="h2">
						{props.Title}
					</Title>
					<BodyContainer>{props.Content}</BodyContainer>
					<Link className="primaryBtnOrange" href={props.MainCTAurl}>
						<span>{props.MainCTAText}</span>
						<Image
							src={AngledArrow}
							alt="angled arrow"
							width={15}
							height={15}
						/>
					</Link>
					{props.SecondaryContent && (
						<SecondaryContainer>
							{props.SecondaryContent}
							<Link
								className="primaryLinkBlue"
								href={props.SecondaryCTAurl}>
								<span>{props.SecondaryCTAtext}</span>
								<Image
									src={AngledArrowBlue}
									alt="angled arrow"
									width={15}
									height={15}
								/>
							</Link>
						</SecondaryContainer>
					)}
					{/* <Link className="primaryBtnBlue" href={props.MainCTAurl}>
						<span>{props.MainCTAText}</span>
						<Image
							src={AngledArrowBlue}
							alt="angled arrow"
							width={15}
							height={15}
						/>
					</Link> */}
				</ContentContainer>
			</MediaTextContainer>
		</MediaTextSection>
	);
}
