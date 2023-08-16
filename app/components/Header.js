"use client";
import { styled } from "styled-components";
import Image from "next/image";

const StyledHeader = styled.header``;
const NavContainer = styled.nav``;
const NavSection = styled.section``;

export default function Header() {
	return (
		<StyledHeader>
			Logo
			<NavContainer>
				<NavSection>Reports Events</NavSection>

				<NavSection></NavSection>
			</NavContainer>
		</StyledHeader>
	);
}
