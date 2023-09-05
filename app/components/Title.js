"use client";
import { styled } from "styled-components";

const TitleStyled = styled.h1`
	color: ${(props) =>
	props.color === "white"
		? "var(--white)"
		: props.color === "coolgrey"
		? "var(--cool-grey)"
		: props.color === "slate"
		? "var(--slate)"
		: "var(--white)"};
	font-size: ${(props) => props.size === "xlheading" 
		? "var(--xlheading)" 
		: props.size === "heading" 
		? "var(--heading)"
		: props.size === "quote"
		? "var(--quote)"
		: props.size === "sub-heading" 
		? "var(--sub-heading)"
		: props.size === "nav"
		? "var(--nav)"
		: "var(--body)"};
	text-align: ${(props) => props.align === "left" 
		? "left" 
		: props.align === "center" 
		? "center"
		: "left"}
`;

export default function Title(props) {
	const { as, size, color, align } = props;

	return <TitleStyled as={as} size={size} color={color} align={align}>{props.children}</TitleStyled>;
}
