import styled from 'styled-components';

export const SearchMessage = styled.div`
	color: var(--white);
	padding: 4rem 6rem 6rem 6rem;
	font-size: 1.5rem;
	font-family: var(--sans-serif);
	font-weight: 400;
	text-align: center;
	min-height: 35vmin;
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		margin-bottom: 2rem;

		&:last-of-type {
			margin-bottom: 0;
		}
	}
`;
