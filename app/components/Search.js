'use client';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

const SearchSection = styled.div`
	position: relative;
	width: 100%;
`;

const SearchBarContainer = styled.div`
	position: relative;
	width: 100%;

	.loader {
		position: absolute;
		right: 0;
		bottom: 1rem;
	}
`;

const StyledInput = styled.input`
	position: relative;
	width: 100%;
	background-color: transparent;
	webkit-appearance: none;
	border: none;
	border-bottom: 0.5px solid var(--white);
	color: var(--white);
	text-transform: uppercase;
	font-weight: 400;
	font-family: var(--sans-serif);
	font-size: var(--nav);
	padding-left: 5rem;
	padding-bottom: 1.5rem;
	letter-spacing: 0.1rem;
	transition: border-color 0.1s ease-in-out;

	&:focus {
		outline: none;
		border-bottom-color: rgba(50, 119, 223, 1);
	}

	&::placeholder {
		color: var(--white);
		font-size: var(--nav);
		font-family: var(--font-family);
		letter-spacing: 0.1rem;
	}
`;

const SearchIcon = styled.svg`
	position: absolute;
	left: 0;
	bottom: 1rem;
`;

// TODO - Search component here seems to be rendered as part of page in strapi, but should probably be baked into pages that need it, like reports

export default function Search({
	isLoading = false,
	handleSearch,
	isVisible = true,
}) {
	const inputRef = useRef(null);

	// Set up a useEffect hook to focus the input when autoFocusProp changes
	useEffect(() => {
		if (isVisible) {
			inputRef.current.focus();
		}
	}, [isVisible]);

	return (
		<SearchSection>
			<SearchBarContainer>
				<SearchIcon
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
				>
					<path
						d="M39.2308 39.2312L28.2418 28.2422M17.2528 33.7367C15.0882 33.7367 12.9447 33.3104 10.9448 32.482C8.94496 31.6536 7.12783 30.4395 5.5972 28.9088C4.06656 27.3782 2.85239 25.5611 2.02402 23.5612C1.19565 21.5613 0.769287 19.4179 0.769287 17.2532C0.769287 15.0886 1.19565 12.9451 2.02402 10.9452C2.85239 8.94538 4.06656 7.12825 5.5972 5.59761C7.12783 4.06697 8.94496 2.85281 10.9448 2.02443C12.9447 1.19606 15.0882 0.769699 17.2528 0.769699C21.6245 0.769699 25.8172 2.50635 28.9084 5.59761C31.9997 8.68887 33.7363 12.8815 33.7363 17.2532C33.7363 21.6249 31.9997 25.8176 28.9084 28.9088C25.8172 32.0001 21.6245 33.7367 17.2528 33.7367Z"
						stroke="#FFF7EB"
					/>
				</SearchIcon>
				<StyledInput
					type="text"
					placeholder="Search"
					onChange={(e) => handleSearch(e.target.value)}
					ref={inputRef}
				/>
				{isLoading && (
					<div className="loader">
						<Spinner />
					</div>
				)}
			</SearchBarContainer>
		</SearchSection>
	);
}
