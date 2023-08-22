"use client";
import Link from "next/link";

import { styled } from "styled-components";
import Title from "./Title";
import BodyCopy from "./BodyCopy";

const ReportListSection = styled.section``;
const ReportCard = styled.article``;
const MetaContainer = styled.div``;
const Date = styled.p``;
const Author = styled.p``;
const TitleContainer = styled.div``;

export default function ReportList(props) {
	return (
		<ReportListSection>
			<Title>{props.Title}</Title>
			<Link href={props.MainCTAurl}>{props.MainCTAtext}</Link>
			{props?.Reports?.map((report, index) => (
				<ReportCard key={`rcard-${index}`}>
					<MetaContainer>
						<Date>Date</Date>
						<Author>Author</Author>
					</MetaContainer>
					<TitleContainer>
						<Link href={report.CTAurl}>{report.CTAtext}</Link>
					</TitleContainer>
				</ReportCard>
			))}
		</ReportListSection>
	);
}
