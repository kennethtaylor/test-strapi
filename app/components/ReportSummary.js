"use client";

import Title from "./Title";
import styled from "styled-components";

const ReportSummarySection = styled.section`
	display: grid;
	grid-template-columns: 1.5fr 2fr;
	background-color: var(--cool-grey);
`;

const Left = styled.div``;
const Right = styled.div``;

const Content = styled.p``;

const GradientContainer = styled.div``;
const CTATitle = styled.h3``;
const CTAContent = styled.p``;

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
				<Title>{LeftTitle}</Title>
				<Content>{LeftContent}</Content>
			</Left>
			<Right>
				<Title>{RightTitle}</Title>
				<Content>{RightContent}</Content>
				<GradientContainer>
					<CTATitle>{CallOutTitle}</CTATitle>
					<CTAContent>{CallOutText}</CTAContent>
				</GradientContainer>
			</Right>
		</ReportSummarySection>
	);
}
