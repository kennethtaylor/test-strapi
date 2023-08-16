"use client";
import { styled } from "styled-components";
import Anchor from "./Anchor";

const StyledSection = styled.section``;

export default function Section(props) {
	const { anchor } = props;

	return (
		<StyledSection>
			<Anchor anchor />
		</StyledSection>
	);
}
