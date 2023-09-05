"use client";
import Link from "next/link";

import { styled } from "styled-components";
import Title from "./Title";
import BodyCopy from "./BodyCopy";
import Image from "next/image";
import AngledArrowBlue from '../../public/images/icons/angledArrowBlue.svg?url';

const ReportListSection = styled.section`
	width: 100%;
	background: var(--cool-grey);
	padding: 4rem 6rem;
`;

const ReportCard = styled.article``;
const MetaContainer = styled.div``;
const Date = styled.p``;
const Author = styled.p``;

const TitleContainer = styled.div`
`;

export default function ReportList(props) {
	return (
		<ReportListSection>
			<Title size="heading" weight="medium" color="darkblue" as="h2">{props.Title}</Title>
			<Link className="primaryBtnBlue" href={props.MainCTAurl}><span>{props.MainCTAtext}</span><Image src={AngledArrowBlue} alt="angled arrow" width={15} height={15}/></Link>
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
