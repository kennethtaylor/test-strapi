"use client";
import styled from "styled-components";

const SearchSection = styled.div`
	padding: 2rem;
`;
const SearchBarContainer = styled.div``;
const SearchResultsContainer = styled.div``;
const StyledInput = styled.input`
	position: relative;
	width: 100%;
	background-color: transparent;
	webkit-appearance: none;
	border: none;
	border-bottom: 1px solid #fff;
	color: #fff;
	padding: 0.5rem;
	font-size: 1rem;
	&::placeholder {
		color: #fff;
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
