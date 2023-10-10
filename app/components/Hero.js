"use client";
import { styled } from "styled-components";
import Section from "./Section";
import Title from "./Title";

const HeroContent = styled.div`
	display: grid;
	place-items: center;
	height: 100%;
	width: 100%;
	text-align: center;

	& h1 {
		padding: 0 6rem;
		line-height: 1.2;
	}
	@media only screen and (max-width: 820px) {
		& h1 {
			font-size: 3rem;
			padding: 0 2rem;
		}
	}
	@media only screen and (max-width: 600px) {
		& h1 {
			font-size: 2.5rem;
		}
	}
`;

const ScrollContent = styled.div`
	position: absolute;
	bottom: -3rem;
	left: 0rem;
	right: 0rem;
	z-index: 2;

	& .scrollIcon {
		position: relative;
		color: var(--white);
		padding: 4.5rem 1.5rem;
		background: transparent !important;
		width: 100%;
		max-width: 184px;
		height: 184px;
		margin: auto;
		text-align: center;
	}

	& .scrollIcon,
	& .scrollIcon .background,
	& .scrollIcon .border {
		border-radius: 184px;
	}

	& .scrollIcon span {
		color: var(--white);
		font-size: var(--nav);
		font-family: var(--sans-serif);
		font-weight: 400;
		letter-spacing: 0.1rem;
		text-transform: uppercase;
		text-align: center;
		margin: 1rem 0 0 0;
	}

	& .scrollIcon::before {
		background: linear-gradient(
				90deg,
				rgba(32, 58, 113, 1) 0%,
				rgba(50, 119, 223, 1) 100%
			)
			border-box;
	}

	& .scrollIcon .background,
	& .scrollIcon .border {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}

	& .scrollIcon .background {
		background: var(--orange-gradient-linear) border-box;
		opacity: 0;
	}

	& .scrollIcon .border {
		border: 1px solid transparent;
		background: linear-gradient(
				90deg,
				rgba(32, 58, 113, 1) 0%,
				rgba(50, 119, 223, 1) 100%
			)
			border-box;
		background: linear-gradient(
				90deg,
				rgba(32, 58, 113, 1) 0%,
				rgba(50, 119, 223, 1) 100%
			)
			border-box;
		-webkit-mask: linear-gradient(#fff 0 0) padding-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: destination-out;
		mask-composite: exclude;
	}

	@media only screen and (max-width: 600px) {
		& {
			bottom: -2rem;
		}
		& .scrollIcon {
			position: relative;
			color: var(--white);
			padding: 3.5rem 1.5rem;
			background: transparent !important;
			width: 100%;
			max-width: 150px;
			height: 150px;
			margin: auto;
			text-align: center;
		}
	}
`;

const ArchiveHeroContent = styled.div`
	width: 100%;
	padding: 13rem 6rem 0 6rem;
	display: flex;
	gap: 4rem;
	align-items: center;
	justify-content: space-between;

	& h1 {
		text-align: left;
	}

	@media only screen and (max-width: 1100px) {
		padding: 13rem 4rem 0 4rem;
		flex-direction: column;

		& h1,
		& p {text-align: center;}
	}

	@media only screen and (max-width: 655px) {
		padding: 13rem 4rem 0rem 4rem;
	}
`;
const FilterContainer = styled.div`
	display: flex;
	gap: 1rem;
	@media only screen and (max-width: 655px) {
		flex-direction: column;
		gap: 1.5rem;
	}
`;
const Filter = styled.select`
	width: 100%;
	min-width: 155px;
	background: transparent;
	text-align: center;
	border: 0.5px solid var(--white);
	font-family: var(--sans-serif);
	letter-spacing: 0.1rem;
	font-size: var(--nav);
	font-weight: 400;
	text-transform: uppercase;
	border-radius: 1.5rem;
	padding: 0.5rem 1rem;
	color: var(--white);
	-webkit-appearance: none;
    background-image: linear-gradient(135deg, rgb(0, 85, 155) 0%, transparent 0%), radial-gradient(#fff 70%, transparent 72%);
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - .5em) .5em;
  	background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
`;

const ArchiveContentContainer = styled.div`
	color: white;

	& h1 {
		padding: 0rem;
		font-family: var(--sans-serif);
		font-weight: 600;
	}
	
	& p {
		font-family: var(--sans-serif);
		color: var(--white);
		font-weight: 400;
		font-size: var(--body);
	}
`;

export default function Hero(props) {
	const { Title: title, Content, Image, Type } = props;

	switch (Type) {
		case "home":
			return (
				<Section bgimage={`${Image.data.attributes.url}`}>
					<HeroContent>
						<Title
							as="h1"
							color="white"
							size="heading"
							weight="medium"
							align="center">
							{title}
						</Title>
					</HeroContent>
					<ScrollContent>
						<div className="scrollIcon">
							<span>Scroll</span>
							<div className="border"></div>
							<div className="background"></div>
						</div>
					</ScrollContent>
				</Section>
			);
		case "full":
		case "threeQuarters":
		case "postArchive":
			return (
				<Section none={true}>
					<ArchiveHeroContent>
						<ArchiveContentContainer>
							<Title
								as="h1"
								color="white"
								size="xlheading"
								weight="medium">
								{title}
							</Title>
							<p>{Content}</p>
						</ArchiveContentContainer>
						<FilterContainer>
							<Filter>
								<option>Category</option>
							</Filter>
							<Filter>
								<option>Month</option>
							</Filter>
							<Filter>
								<option>Year</option>
							</Filter>
						</FilterContainer>
					</ArchiveHeroContent>
				</Section>
			);
		case "postSingle":
		default:
			break;
	}
}
