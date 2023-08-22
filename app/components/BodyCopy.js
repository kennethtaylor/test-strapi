"use client";

import styled from "styled-components";

const BodyCopyContainer = styled.div``;

export default function BodyCopy(props) {
	const { as, children } = props;
	return <BodyCopy as={as}>{children}</BodyCopy>;
}
