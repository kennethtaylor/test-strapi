"use client";

import Title from "./Title";
import styled from "styled-components";

const ReportSummarySection = styled.section`
	width: 100%;
	display: flex;
	align-items: flex-start;
	gap: 6rem;
	justify-content: space-between;
	flex-wrap: wrap;
	background-color: var(--cool-grey);
	padding: 6rem 6rem;
	position: relative;
`;

const Left = styled.div`	
	width: calc(40% - 3rem);
`;
const Right = styled.div`
	width: calc(60% - 3rem);
	&:before {
		content: "";
		width: 2px;
		background: rgba(128,128,132,0.3);
		height: 100%;
		display: inline;
		position: absolute;
		top: 0;
		left: calc(40% + 0.5rem);
		bottom: 0;

	}
`;

const Content = styled.p``;

const GradientContainer = styled.div`
display: flex;
gap: 4rem;
align-items: center;
color: var(--white);
margin: 2rem auto auto auto;
border-radius: 1rem;
-webkit-border-radius: 1rem;
-moz-border-radius: 1rem;
padding: 2rem;
background: rgb(255,185,1);
background: linear-gradient(0deg, rgba(255,185,1,1) 0%, rgba(255,127,0,1) 45%, rgba(254,99,18,1) 89%, rgba(253,98,32,1) 100%);
background: -moz-linear-gradient(0deg, rgba(255,185,1,1) 0%, rgba(255,127,0,1) 45%, rgba(254,99,18,1) 89%, rgba(253,98,32,1) 100%);
background: -webkit-linear-gradient(0deg, rgba(255,185,1,1) 0%, rgba(255,127,0,1) 45%, rgba(254,99,18,1) 89%, rgba(253,98,32,1) 100%);
`;

const CTATitle = styled.h3`
	font-family: var(--sans-serif);
	font-size: var(--quote);
	font-weight: 600;
`;
const CTAContent = styled.p`
	font-family: var(--sans-serif);
	font-size: var(--body);
	font-weight: 400;
`;

export default function ReportSummary(props) {
	const {
		LeftTitle,
		LeftContent,
		RightTitle,
		RightContent,
		CallOutTitle,
		CallOutText,
	} = props;
	return (
		<ReportSummarySection>
			<Left>
				<Title as="h2" color="darkblue" weight="medium" size="quote">{LeftTitle}</Title>
				<Content>{LeftContent}</Content>
			</Left>

			<Right>
				<Title as="h2" color="darkblue" weight="medium" size="quote">{RightTitle}</Title>
				<Content>{RightContent}</Content>
				<GradientContainer>
					<CTATitle>{CallOutTitle}</CTATitle>
					<CTAContent>{CallOutText}</CTAContent>
				</GradientContainer>
			</Right>
		</ReportSummarySection>
	);
}
