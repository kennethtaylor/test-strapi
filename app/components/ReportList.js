"use client";
import Link from "next/link";

import { styled } from "styled-components";
import Title from "./Title";
import BodyCopy from "./BodyCopy";
import Image from "next/image";
import AngledArrowBlue from "../../public/images/icons/angledArrowBlue.svg?url";

const ReportListSection = styled.section`
	width: 100%;
	background: var(--cool-grey);
	padding: 4rem 6rem;
`;

const ReportCard = styled.article``;
const MetaContainer = styled.div``;
const Date = styled.p``;
const Author = styled.p``;

const TitleContainer = styled.div``;

function formatDate(report) {
	let date = new Date(report.attributes.publishedAt);

	return date.toLocaleString("default", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export default function ReportList(props) {
	return (
		<ReportListSection>
			<Title size="heading" weight="medium" color="darkblue" as="h2">
				{props.Title}
			</Title>
			<Link className="primaryBtnBlue" href={props.MainCTAurl}>
				<span>{props.MainCTAtext}</span>
				<Image
					src={AngledArrowBlue}
					alt="angled arrow"
					width={15}
					height={15}
				/>
			</Link>
			{props?.reports?.data?.map((report, index) => {
				return (
					<ReportCard key={`rcard-${index}`}>
						<MetaContainer>
							<Date>{formatDate(report)}</Date>
							<Author>Author</Author>
						</MetaContainer>
						<TitleContainer>
							<Link href={report?.CTAurl || ""}>
								{report?.attributes?.Title}
							</Link>
						</TitleContainer>
					</ReportCard>
				);
			})}
		</ReportListSection>
	);
}
