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
`;

const ArchiveHeroContent = styled.div`
	padding-top: 13rem;
	padding-inline: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const FilterContainer = styled.div`
	display: flex;
	gap: 1rem;
`;
const Filter = styled.select`
	width: 100%;
	min-width: 125px;
`;

const ArchiveContentContainer = styled.div`
	color: white;
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
				<Section bgimage={`${Image.data.attributes.url}`} half={true}>
					<ArchiveHeroContent>
						<ArchiveContentContainer>
							<Title
								as="h1"
								color="white"
								size="heading"
								weight="medium"
								align="center">
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
