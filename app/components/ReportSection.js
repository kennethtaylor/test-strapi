'use client';
import styled from 'styled-components';

const ReportMainSection = styled.div``;
const ReportFullContent = styled.div``;
const ReportImageFeature = styled.div``;
const ReportImage = styled.div``;
const ReportBlurb = styled.div``;

export default function ReportSection(props) {
	const { Title, subtitle, content, leftContent, rightImage } = props;
	return (
		<ReportMainSection>
			<ReportFullContent></ReportFullContent>
			<ReportImageFeature>
				<ReportImage></ReportImage>
				<ReportBlurb></ReportBlurb>
			</ReportImageFeature>
		</ReportMainSection>
	);
}
