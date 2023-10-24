"use client";
import { useState } from "react";
import Title from "./Title";
import { styled } from "styled-components";

const AnalystsSection = styled.section`
	width: 100%;
	background-color: var(--cool-grey);
`;

const AnalystsCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export default function AnalystsGrid(props) {
	const { Title: title, blurb, AnalystsCard } = props;
	const [currentAnalyst, setCurrentAnalyst] = useState(null);
	console.log(props);

	return (
		<AnalystsSection>
			<Title as="h1" color="white" size="heading" align="left">
				{title}
			</Title>
			{blurb && <p>{blurb}</p>}
			<AnalystsCardContainer>
				{AnalystsCard?.map((analyst, index) => {
					return (
						<AnalystsCard
							key={`analyst-${index}`}
							onClick={() =>
								setCurrentAnalyst(props.AnalystsCard[index])
							}
						>
							{/* <Image src={analyst.image.url} alt={analyst.image.alternativeText} /> */}
							<p>{analyst.Name}</p>
							<p>{analyst.JobTitle}</p>
						</AnalystsCard>
					);
				})}
			</AnalystsCardContainer>
		</AnalystsSection>
	);
}
