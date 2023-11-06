import styled from 'styled-components';

// Shared styles between Post Lists

export const TitleContainer = styled.h2`
	font-family: var(--sans-serif);
	font-size: var(--sub-heading);
	line-height: 1.2;

	& a {
		font-family: var(--sans-serif);
		font-weight: 600;
		font-size: var(--reportsheading);
		text-decoration: none;
		line-height: 1.1;
		color: var(--darkblue);
	}
`;

export const TitleContainerList = styled.div`
	font-size: var(--sub-heading);
	font-weight: 600;
	width: 60%;
	color: var(--darkblue);
	font-family: var(--sans-serif);

	& .mobileArrow {
		display: none;
	}

	@media only screen and (max-width: 820px) {
		display: flex;
		width: 100%;
		gap: 2rem;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0 0 0;

		& .mobileArrow {
			display: block;
			width: 40px;
			position: relative;
		}

		& .mobileArrow img {
			transition: 0.3s ease all;
			width: 100%;
			max-width: 40px;
			height: auto;
			opacity: 0;
			margin: auto;
			text-align: right;
			display: block;
		}
	}
`;

export const Arrow = styled.div`
	width: 10%;

	& img {
		transition: 0.3s ease all;
		width: 100%;
		max-width: 40px;
		height: auto;
		margin: auto;
		display: block;
		text-align: right;
		opacity: 0;
	}
	@media only screen and (max-width: 820px) {
		display: none;
	}
`;

export const PostGridSection = styled.div`
	width: 100%;
	padding: 4rem 6rem;
	@media only screen and (max-width: 1100px) {
		padding: 4rem 4rem;
	}
	@media only screen and (max-width: 655px) {
		padding: 4rem 2rem 4rem 2rem;
	}
`;

export const PostGridInnerContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	height: max-content;
	gap: 2rem;

	@media only screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and (max-width: 820px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const PostTopContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	justify-content: space-between;
	padding: 4rem 6rem 3rem 6rem;

	@media only screen and (max-width: 820px) {
		display: block;
		padding: 4rem 4rem 3rem 4rem;

		& h2 {
			line-height: 1.2;
		}
		& a.primaryBtnBlue {
			margin-top: 2rem;
		}
	}
	@media only screen and (max-width: 600px) {
		padding: 4rem 3rem 3rem 3rem;
	}
`;

export const PostCard = styled.article`
	border-top: 1px solid var(--darkblue);
	width: 100%;
	display: flex;
	padding: 3rem 6rem;

	&:last-child {
		border-bottom: 1px solid var(--darkblue);
	}

	&:hover img.rightArrow {
		opacity: 1;
	}

	@media only screen and (max-width: 820px) {
		display: flex;
		flex-direction: column;
		padding: 3rem 4rem;
	}
	@media only screen and (max-width: 600px) {
		padding: 3rem 3rem;
	}
`;

export const SearchContainer = styled.div`
	padding: 2rem 6rem;
	margin: 4rem 0 0 0;

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
