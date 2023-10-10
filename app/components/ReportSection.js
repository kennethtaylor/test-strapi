"use client";

import styled from "styled-components";
import Title from "./Title";
import Image from "next/image";

const StyledReportSection = styled.section``;
const ReportSectionContainer = styled.div``;

const Top = styled.div``;
const SubtitleContainer = styled.h3``;
const Content = styled.p``;

const Bottom = styled.div``;
const GradientDivider = styled.div``;
const ContentLeftContainer = styled.p``;

const BottomContent = styled.div``;
const BottomImage = styled.div``;
const BottomImages = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
`;

export default function ReportSection(props) {
	const {
		Title: title,
		Subtitle,
		Blurb,
		ContentLeft,
		Type,
		ImageRight,
		imageLeft,
	} = props;
	switch (Type) {
		case "doubleImage":
			return (
				<StyledReportSection>
					<ReportSectionContainer>
						<Top>
							<Title>{title}</Title>
							<SubtitleContainer>{Subtitle}</SubtitleContainer>
							<Content
								dangerouslySetInnerHTML={{ __html: Blurb }}
							/>
						</Top>
						<Bottom>
							<BottomImages>
								<Image
									src={imageLeft?.data?.attributes?.url}
									width={624}
									height={464}
									style={{ width: "100%", height: "auto" }}
								/>
								<Image
									src={ImageRight?.data?.attributes?.url}
									width={624}
									height={464}
									style={{ width: "100%", height: "auto" }}
								/>
							</BottomImages>
						</Bottom>
					</ReportSectionContainer>
				</StyledReportSection>
			);
		default:
			return (
				<StyledReportSection>
					<ReportSectionContainer>
						<Top>
							<Title>{title}</Title>
							<SubtitleContainer>{Subtitle}</SubtitleContainer>
							<Content
								dangerouslySetInnerHTML={{ __html: Blurb }}
							/>
						</Top>
						<Bottom>
							<ContentLeftContainer>
								<GradientDivider />
								{ContentLeft}
							</ContentLeftContainer>
							<Image
								src={ImageRight.data.attributes.url}
								width={624}
								height={464}
							/>
						</Bottom>
					</ReportSectionContainer>
				</StyledReportSection>
			);
	}
}
