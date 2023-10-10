"use client";
import styled from "styled-components";

const SearchSection = styled.div`
	padding: 2rem 6rem;

	@media only screen and (max-width: 1100px) {
		& {
			padding: 2rem 4rem;
		}
	}
	@media only screen and (max-width: 655px) {
		& {
			padding: 2rem 2rem;
		}
	}
`;
const SearchBarContainer = styled.div`
	position: relative;
	width: 100%;
	margin: 4rem 0 0 0;
`;
const SearchResultsContainer = styled.div``;
const StyledInput = styled.input`
	position: relative;
	width: 100%;
	background-color: transparent;
	webkit-appearance: none;
	border: none;
	border-bottom: 0.5px solid var(--white);
	color: var(--white);
	text-transform: uppercase;
	font-family: var(--font-family);
	font-size: var(--nav);
	padding: 0.5rem;
	letter-spacing: 0.1rem;
	font-size: 1rem;

	&::placeholder {
		color: var(--white);
		font-size: var(--nav);
		font-family: var(--font-family);
		letter-spacing: 0.1rem;
	}
`;

export default function Search() {
	return (
		<SearchSection>
			<SearchBarContainer>
				<StyledInput type="text" placeholder="Search" />
			</SearchBarContainer>
			<SearchResultsContainer></SearchResultsContainer>
		</SearchSection>
	);
}
