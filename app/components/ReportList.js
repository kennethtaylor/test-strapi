"use client";
import Link from "next/link";

import { styled } from "styled-components";
import Title from "./Title";
import BodyCopy from "./BodyCopy";
import Image from "next/image";
import AngledArrowBlue from "../../public/images/icons/angledArrowBlue.svg?url";
import { useEffect, useState } from "react";

import { DateTime } from "luxon";

const ReportListSection = styled.section`
	width: 100%;
	background: var(--cool-grey);
	padding: 4rem 6rem;
`;

const ReportGridSection = styled.div`
	width: 100%;
	padding: 4rem 6rem;
`;
const ReportGridInnerContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
`;
const ReportGridCard = styled.article`
	background-color: white;
	padding: 1rem;
	border-radius: 1rem;
	aspect-ratio: 430/396;
`;

const ReportCard = styled.article``;
const MetaContainer = styled.div``;
const Date = styled.p``;
const Author = styled.p``;

const TitleContainer = styled.div``;

export default function ReportList(props) {
	// isloading state
	const [isLoading, setIsLoading] = useState(true);

	let win;

	let formatDate = function (win, report) {
		let date = new win.Date(report.attributes.publishedAt);
		console.log("date", date);
		return date.toLocaleString("default", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	};

	switch (props.Type) {
		case "grid":
			return (
				<ReportGridSection>
					<ReportGridInnerContainer>
						{props?.reports?.data?.map((report, index) => {
							let date = DateTime.now(
								report.attributes.publishedAt
							);
							return (
								<ReportGridCard key={`rcard-${index}`}>
									<MetaContainer>
										<Date>
											{Intl.DateTimeFormat("en-us", {
												month: "long",
												day: "numeric",
												year: "numeric",
											}).format(date)}
										</Date>
										<Author>Author</Author>
									</MetaContainer>
									<TitleContainer>
										<Link href={report?.CTAurl || ""}>
											{report?.attributes?.Title}
										</Link>
									</TitleContainer>
								</ReportGridCard>
							);
						})}
					</ReportGridInnerContainer>
				</ReportGridSection>
			);
		default:
			return (
				<ReportListSection>
					<Title
						size="heading"
						weight="medium"
						color="darkblue"
						as="h2">
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
						let date = DateTime.now(report.attributes.publishedAt);
						return (
							<ReportCard key={`rcard-${index}`}>
								<MetaContainer>
									<Date>
										{Intl.DateTimeFormat("en-us", {
											month: "long",
											day: "numeric",
											year: "numeric",
										}).format(date)}
									</Date>
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
}
