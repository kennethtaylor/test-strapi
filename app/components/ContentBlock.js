"use client";
import styled from "styled-components";

const ContentBlockSection = styled.section`
	min-height: 50vh;
	padding-top: 12rem;
`;
const ContentBlockInnerContainer = styled.div``;

export default function ContentBlock(props) {
	return (
		<ContentBlockSection>
			<ContentBlockInnerContainer
				dangerouslySetInnerHTML={{ __html: props.Content }}
			/>
		</ContentBlockSection>
	);
}
