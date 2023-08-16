"use client";
import { styled } from "styled-components";

const StyledAnchor = styled.a`
	position: relative;
	top: -150px;
`;

export default function Anchor({ anchor }) {
	if (anchor == null) return null;

	return <StyledAnchor id={anchor}></StyledAnchor>;
}
