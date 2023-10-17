"use client";
import Title from "./Title";
import { styled } from "styled-components";

const AnalystsSection = styled.section`
    width: 100%;
    background-color: var(--cool-grey);
`;

export default function AnalystsGrid() {
    const {
		Title: title,
        blurb,
	} = props;

    return (
        <AnalystsSection>
            <Title
			    as="h1"
				color="white"
				size="heading"
				align="left">
				{title}
			</Title>
        </AnalystsSection>
    )
}