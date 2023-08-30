"use client";
import { styled } from "styled-components";

const TitleStyled = styled.h1``;

export default function Title(props) {
	const { as, size, color } = props;

	return <TitleStyled as={as} size={size} color={color}>{props.children}</TitleStyled>;
}
