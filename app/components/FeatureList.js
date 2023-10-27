"use client";
import styled from "styled-components";
import Image from "next/image";
import Title from "./Title";

const FeatureListSection = styled.section`
	width: 100%;
	padding: 8rem 6rem 0 6rem;
`;

const Feature = styled.div`
	display: flex;
	gap: 4rem;
	align-items: flex-start;
	flex-wrap: wrap;

	& .half {
		width: calc(50% - 2rem);
		padding: 4rem 0 2rem 0;
	}
	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		background: linear-gradient(90deg, rgba(32,58,113,1) 0%, rgba(50,119,223,1) 100%);
	}
	& .half h2,
	& .half p {
		color: var(--white);
		font-family: var(--sans-serif);
	}
	& .half h2 {
		font-size: var(--smallheading);
		font-weight: 500;
	}
	& .half p {
		font-size: var(---body-large);
		font-weight: 400;
		line-height: 1.5;
	}
`;

export default function FeatureList(props) {
	const { Title: title, FeaturesData } = props;

	return (
		<FeatureListSection>
			<Title
				as="h2"
				color="white"
				size="heading"
				weight="medium"
				align="left"
			>
				{title}
			</Title>
			{FeaturesData?.map((feature, index) => {
				return (
					<Feature key={`ft-${index}`}>
						<div className="half">
							<h2>{feature?.Title}</h2>
						</div>
						<div className="half">
							<p>{feature?.Content}</p>
						</div>
					</Feature>
				);
			})}
		</FeatureListSection>
	);
}
