"use client";
import { styled } from "styled-components";
import Anchor from "./Anchor";

const StyledSection = styled.section`
	position: relative;
	height: 100vh;

	background-image: url(${(props) => `${process.env.APP_URL}${props.bg}`});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export default function Section(props) {
	const { anchor, bgimage = "none" } = props;

	return <StyledSection bg={bgimage}>{props.children}</StyledSection>;
}
