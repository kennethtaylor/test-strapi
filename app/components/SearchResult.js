import styled from 'styled-components';
import Link from 'next/link';

export const SearchResult = ({ result }) => {
	const publishedAt = new Date(result.publishedAt);

	return result.resultType === 'events' ? (
		<StyledSearchResult className="-event">
			<Link
				href={`${window.location.origin}/${result.url}`}
				className="search-result-title"
			>
				{result.Title}
			</Link>
			{result.EventStart && result.EventEnd && (
				<div className="search-result-date">
					<div>
						Date:{' '}
						{Intl.DateTimeFormat('en-us', {
							month: 'long',
							day: 'numeric',
							year: 'numeric',
						}).format(new Date(result.EventStart))}
					</div>
					<div>
						Time:{' '}
						{Intl.DateTimeFormat('en-us', {
							hour: 'numeric',
							minute: 'numeric',
							timeZone: 'America/New_York',
							timeZoneName: 'short',
						}).format(new Date(result.EventStart))}{' '}
						-{' '}
						{Intl.DateTimeFormat('en-us', {
							hour: 'numeric',
							minute: 'numeric',
							timeZone: 'America/New_York',
							timeZoneName: 'short',
						}).format(new Date(result.EventEnd))}
					</div>
				</div>
			)}
		</StyledSearchResult>
	) : (
		<StyledSearchResult>
			<div className="search-result-date">
				{Intl.DateTimeFormat('en-us', {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
				}).format(publishedAt)}
			</div>
			<Link
				href={`${window.location.origin}/${result.url}`}
				className="search-result-title"
			>
				{result.Title}
			</Link>
		</StyledSearchResult>
	);
};

const StyledSearchResult = styled.div`
	background: var(--white);
	border-bottom: 1px solid var(--cool-grey);
	padding: 2.5rem 5rem;

	.search-result-date {
		color: var(--darkblue);
		font-size: 1.125rem;
		font-family: var(--sans-serif);
		margin-bottom: 0.5rem;
	}

	.search-result-title {
		font-size: 1.5rem;
		font-family: var(--sans-serif);
		font-weight: 600;
		transition: 0.2s color ease-in-out;

		&:hover,
		&:focus {
			color: var(--orange);
		}
	}

	&.-event {
		.search-result-date {
			display: flex;
			flex-wrap: wrap;
			gap: 0 2rem;
			margin-bottom: 0;
		}
	}
`;
