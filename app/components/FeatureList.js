"use client";
import styled from "styled-components";
import Image from "next/image";
import Title from "./Title";

const FeatureListSection = styled.section`
    width: 100%;
    padding: 8rem 6rem 0 6rem;
`;

const Feature = styled.div``;

export default function FeatureList(props) {
    const {
        Title: title,
        FeaturesData,
    } = props;

	return (
        <FeatureListSection>
            <Title
				as="h2"
				color="white"
				size="heading"
				weight="medium"
				align="left">
				{title}
			</Title>
            {FeaturesData?.data?.map((feature, index) => {
                return(
                    <Feature key={`ft-${index}`}>
                        <p>{feature?.attributes?.Title}</p>
                    </Feature>
                );
            })}
        </FeatureListSection>

    );
    }