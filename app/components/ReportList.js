'use client';
import Link from 'next/link';
import { styled } from 'styled-components';
import Title from './Title';

import Image from 'next/image';
import AngledArrowBlue from '../../public/images/icons/angledArrowBlue.svg?url';
import ArrowRightOrange from '../../public/images/icons/arrowRightOrange.svg?url';

import Search from './Search';
import { SearchMessage } from './SearchMessage';
import useDebouncedState from './../hooks/useDebouncedState';
import { useFilteredSearch } from '../hooks/useFilteredSearch';

const TitleContainer = styled.h2`
	font-family: var(--sans-serif);
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

const TitleContainerList = styled.div`
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

const Arrow = styled.div`
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

const ReportListSection = styled.section`
	width: 100%;
	background: var(--cool-grey);
	padding: 4rem 0rem;
`;

const ReportGridSection = styled.div`
	width: 100%;
	padding: 4rem 6rem;
	@media only screen and (max-width: 1100px) {
		padding: 4rem 4rem;
	}
	@media only screen and (max-width: 655px) {
		padding: 4rem 2rem 4rem 2rem;
	}
`;

const ReportGridInnerContainer = styled.div`
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

const ReportGridCard = styled.article`
	background-color: white;
	padding: 3rem 2rem 2rem;
	border-radius: 1rem;
	display: flex;
	border: 2px solid;
	flex-direction: column;
	justify-content: space-between;
	aspect-ratio: 430/396;
	transition: 0.5s ease all;
	cursor: pointer;
	position: relative;

	& h2,
	& p {
		font-family: var(--sans-serif);
	}

	@media only screen and (max-width: 820px) {
		padding: 2rem;
		aspect-ratio: unset;
		
		& h2 {
			padding: 2rem 0;
		}
	}
`;

const ReportGridCardLink = styled(Link)`
	position: relative;

	&:hover,
	&:focus {
		${ReportGridCard} {
			background: var(--darkblue);
			box-shadow: 0px 4px 40px 0px rgba(249, 255, 216, 0.3);

			&::after {
				position: absolute;
				top: -4px;
				bottom: -4px;
				left: -4px;
				right: -4px;
				background: linear-gradient(
					90deg,
					rgba(32, 58, 113, 1) 0%,
					rgba(50, 119, 223, 1) 100%
				);
				content: '';
				z-index: -1;
				border-radius: 1rem;
			}

			h2,
			p,
			.text {
				color: var(--white);
			}

			img.angledArrow {
				filter: contrast(0) sepia(100%) hue-rotate(-15deg) saturate(3);
			}
		}
	}
`;

const ReportsTopContainer = styled.div`
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

const ReportCard = styled.article`
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

const MetaContainerList = styled.div`
	width: 30%;
	@media only screen and (max-width: 820px) {
		& {
			width: 100%;
		}
	}
`;

const DateList = styled.p`
	font-weight: 400;
	font-family: var(--sans-serif);
	padding: 0 0 1rem 0;
	font-size: var(--body);
	color: var(--darkblue);

	@media only screen and (max-width: 820px) {
		& {
			width: 100%;
		}
	}
`;

const ReportGridCardFooter = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& span.text {
		font-weight: 400;
		font-family: var(--sans-serif);
		padding: 0 0 1rem 0;
		font-size: var(--body);
		color: var(--darkblue);
	}
`;

const SearchContainer = styled.div`
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

export default function ReportList(props) {
	const [searchTerm, setSearchTerm] = useDebouncedState('', 500);
	const { isLoading, items } = useFilteredSearch('reports', searchTerm);

	switch (props.Type) {
		case 'grid':
			return (
				<>
					<SearchContainer>
						<Search
							isLoading={isLoading}
							handleSearch={setSearchTerm}
						/>
					</SearchContainer>
					{!isLoading && items?.data?.length > 0 ? (
						<ReportGridSection>
							<ReportGridInnerContainer>
								{items?.data?.map((report, index) => {
									const publishedAt = new Date(
										report?.attributes.publishedAt.substring(
											0,
											10
										)
									);

									const formattedPublishedAt =
										publishedAt.toLocaleString('default', {
											month: 'long',
											day: 'numeric',
											year: 'numeric',
										});

									return (
										<ReportGridCardLink
											key={`rcardlink-${index}`}
											href={
												`/reports/${report?.attributes?.slug}` ||
												''
											}
										>
											<ReportGridCard
												key={`rcard-${index}`}
											>
												<TitleContainer>
													{report?.attributes?.Title}
												</TitleContainer>
												<ReportGridCardFooter>
													<span className="text">
														{formattedPublishedAt}
													</span>
													<Image
														src={AngledArrowBlue}
														alt="angled arrow"
														width={30}
														height={30}
														className="angledArrow"
													/>
												</ReportGridCardFooter>
											</ReportGridCard>
										</ReportGridCardLink>
									);
								})}
							</ReportGridInnerContainer>
						</ReportGridSection>
					) : (
						<SearchMessage>
							{isLoading ? (
								<p>Gathering Reports</p>
							) : (
								<div>
									<p>
										Sorry, nothing matches your search
										criteria.
									</p>
									<p>
										Please try refiing your search or
										contact us for more information.
									</p>
								</div>
							)}
						</SearchMessage>
					)}
				</>
			);
		default:
			return (
				<ReportListSection>
					<ReportsTopContainer>
						<Title
							size="heading"
							weight="medium"
							color="darkblue"
							as="h2"
						>
							{props.Title}
						</Title>
						<Link
							className="primaryBtnBlue"
							href={props.MainCTAurl || '#'}
						>
							<span>{props.MainCTAtext}</span>
							<Image
								src={AngledArrowBlue}
								alt="angled arrow"
								width={15}
								height={15}
							/>
						</Link>
					</ReportsTopContainer>
					{props?.reports?.data?.map((report, index) => {
						const publishedAt = new Date(
							report?.attributes.publishedAt.substring(0, 10)
						);

						const formattedPublishedAt = publishedAt.toLocaleString(
							'default',
							{
								month: 'long',
								day: 'numeric',
								year: 'numeric',
							}
						);
						return (
							<ReportCard key={`rcard-${index}`}>
								<MetaContainerList>
									<DateList>{formattedPublishedAt}</DateList>
								</MetaContainerList>
								<TitleContainerList>
									<Link href={report?.CTAurl || '#'}>
										{report?.attributes?.Title}
									</Link>
									<div className="mobileArrow">
										<Image
											src={ArrowRightOrange}
											alt="angled arrow"
											width={15}
											height={15}
											className="rightArrow"
										/>
									</div>
								</TitleContainerList>
								<Arrow>
									<Image
										src={ArrowRightOrange}
										alt="angled arrow"
										width={15}
										height={15}
										className="rightArrow"
									/>
								</Arrow>
							</ReportCard>
						);
					})}
				</ReportListSection>
			);
	}
}
