'use client';
import Link from 'next/link';
import { styled } from 'styled-components';
import Title from './Title';
import Image from 'next/image';
import AngledArrowBlue from '../../public/images/icons/angledArrowBlue.svg?url';
import ArrowRightOrange from '../../public/images/icons/arrowRightOrange.svg?url';
import { SearchMessage } from './SearchMessage';
import { GridCard, GridCardLink } from './GridCard';
import {
	TitleContainer,
	TitleContainerList,
	Arrow,
	PostGridSection,
	PostTopContainer,
	PostCard,
	PostGridInnerContainer,
} from './PostList';
import { useFilteredEventSearch } from '../hooks/useFilteredSearch';

import { DateTime } from 'luxon';

const EventListSection = styled.section`
	width: 100%;
	background: var(--cool-grey);
	padding: 4rem 0rem;
`;

const EventCardDetails = styled.div`
	margin-top: 1rem;
	margin-bottom: 2rem;

	@media only screen and (max-width: 820px) {
		margin-top: 0;
	}

	> * {
		margin-top: 0.5rem;
	}
`;

const EventCardHeader = styled.div`
	position: relative;
`;

const EventCardTime = styled.p`
	font-size: var(--body);
`;

const MetaContainerList = styled.div`
	width: 30%;
	@media only screen and (max-width: 820px) {
		& {
			width: 100%;
		}
	}
`;

const DateText = styled.p`
	font-family: var(--sans-serif);
	font-weight: 400;
	font-size: var(--body);
`;

const DateList = styled.p`
	font-weight: 600;
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

const LearnMoreContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const AuthorList = styled.p`
	font-weight: 400;
	font-family: var(--sans-serif);
	font-size: var(--body);
	color: var(--darkblue);
	padding: 0px;
`;

const LearnMoreBtn = styled.p`
	font-weight: 400;
	font-family: var(--sans-serif);
	font-size: var(--body);
`;

export default function EventList(props) {
	const { isLoading, items } = useFilteredEventSearch();

	const getEventDateTimes = (eventDetails) => {
		let eventDate;
		let formattedEventDate;
		let eventStartTime;
		let eventEndTime;

		if (eventDetails?.date) {
			const startTimeParts = eventDetails.startTime.split(':');
			const endTimeParts = eventDetails.endTime.split(':');

			eventDate = DateTime.fromISO(eventDetails?.date).setZone(
				'America/New_York'
			);
			// .toLocal(); TODO - If we want to display the users TZ we'll need to do some additional work here
			formattedEventDate = eventDate.toLocaleString(DateTime.DATE_FULL);
			eventStartTime = eventDate.set({
				hour: startTimeParts[0],
				minute: startTimeParts[1],
			});
			eventEndTime = eventDate.set({
				hour: endTimeParts[0],
				minute: endTimeParts[1],
			});
		}

		return {
			eventDate,
			formattedEventDate,
			eventStartTime,
			eventEndTime,
		};
	};

	switch (props.Type) {
		case 'grid':
			return (
				<>
					{!isLoading && items?.data?.length > 0 ? (
						<PostGridSection>
							<PostGridInnerContainer>
								{items?.data?.map((event, index) => {
									const eventDetails =
										event?.attributes?.EventDetails;

									const {
										eventDate,
										formattedEventDate,
										eventStartTime,
										eventEndTime,
									} = getEventDateTimes(eventDetails);

									return (
										<GridCardLink
											key={`rcardlink-${index}`}
											href={
												`/events/${event?.attributes?.Slug}` ||
												'#'
											}
										>
											<GridCard key={`rcard-${index}`}>
												<EventCardHeader>
													<TitleContainer>
														{
															event?.attributes
																?.Title
														}
													</TitleContainer>
													<EventCardDetails>
														{eventDate && (
															<DateText>
																{
																	formattedEventDate
																}
															</DateText>
														)}
														<EventCardTime>
															{eventStartTime &&
															eventEndTime ? (
																<>
																	{eventStartTime.toFormat(
																		'h:mma'
																	)}{' '}
																	-{' '}
																	{eventEndTime.toFormat(
																		'h:mma'
																	)}{' '}
																	{
																		eventDate.offsetNameShort
																	}
																</>
															) : null}
														</EventCardTime>
													</EventCardDetails>
												</EventCardHeader>
												<LearnMoreContainer>
													<LearnMoreBtn>
														Learn More
													</LearnMoreBtn>
													<Image
														src={AngledArrowBlue}
														alt="angled arrow"
														width={30}
														height={30}
														className="angledArrow"
													/>
												</LearnMoreContainer>
											</GridCard>
										</GridCardLink>
									);
								})}
							</PostGridInnerContainer>
						</PostGridSection>
					) : (
						<SearchMessage>
							{isLoading ? (
								<p>Gathering Events</p>
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
				<EventListSection>
					<PostTopContainer>
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
					</PostTopContainer>
					{props?.events?.data?.map((event, index) => {
						let publishedAt = new DateTime(
							event.attributes.publishedAt
						);
						return (
							<PostCard key={`rcard-${index}`}>
								<MetaContainerList>
									<DateList>
										{`${publishedAt.monthLong} ${publishedAt.c.day}, ${publishedAt.c.year}`}
									</DateList>
									<AuthorList>Author</AuthorList>
								</MetaContainerList>
								<TitleContainerList>
									<Link href={event?.CTAurl || '#'}>
										{event?.attributes?.Title}
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
							</PostCard>
						);
					})}
				</EventListSection>
			);
	}
}
