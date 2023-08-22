"use client";
import { styled } from "styled-components";

const TitleStyled = styled.h1``;

export default function Title(props) {
	const { as } = props;

	return <TitleStyled as={as}>{props.children}</TitleStyled>;
}
