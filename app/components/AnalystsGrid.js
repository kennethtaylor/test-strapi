"use client";
import { useState } from "react";
import Title from "./Title";
import { styled } from "styled-components";
import Image from "next/image";
import AngledArrowBlue from '../../public/images/icons/angledArrowBlue.svg?url';

const AnalystsSection = styled.section`
	width: 100%;
	background-color: var(--cool-grey);
	padding: 6rem 6rem;
`;

const AnalystsCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 2rem;
`;

const AnalystsCard = styled.div`
	& h2,
	& p {
		font-family: var(--sans-serif);
		font-color: var(--darkblue);
	}
	& h2 {
		font-size: var(--sub-heading);
	}
`;

const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	cursor: pointer;

	& .analystData {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	& .arrow {
		width: 30px;
		position: relative;
	}

	& .arrow img {
		width: 100%;
		height: auto;
		maax-width: 100%;
		transition: all 0.3s ease-in-out;
	}
	&:hover .arrow img {filter: contrast(0) sepia(100%) hue-rotate(-15deg) saturate(3);}
`;

export default function AnalystsGrid(props) {
	const { Title: title, blurb, AnalystsCards } = props;
	const [currentAnalyst, setCurrentAnalyst] = useState(null);
	console.log(props);

	return (
		<AnalystsSection>
			<Title as="h1" color="darkblue" weight="medium" size="heading" align="left">
				{title}
			</Title>
			{blurb && <p>{blurb}</p>}
			<AnalystsCardContainer>
				{AnalystsCards?.map((analyst, index) => {
					return (
						<AnalystsCard
							key={`analyst-${index}`}
							onClick={() =>
								setCurrentAnalyst(props.AnalystsCards[index])
							}
						>
							<Image 
								src={analyst.Image?.data.attributes.url}
								alt={analyst.Image?.data.attributes.alternativeText}
								width={329}
								height={323}
							/>
							<FlexContainer>
							<div className="analystData">
								<h2>{analyst.Name}</h2>
								<p>{analyst.JobTitle}</p>
							</div>
							<div className="arrow">
								<Image
									src={AngledArrowBlue}
									alt="angled arrow"
									width={15}
									height={15}
									className="rightArrow"
								/>
							</div>
							</FlexContainer>
						</AnalystsCard>
					);
				})}
			</AnalystsCardContainer>
		</AnalystsSection>
	);
}
