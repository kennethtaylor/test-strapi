'use client';
import sectionRenderer from '../../utils/sectionRenderer';
import getEventBySlug from '../../../lib/getEventBySlug';
import Hero from '@/app/components/Hero';
import getPageSections from '@/lib/getPageSections';
import styled from 'styled-components';
import { remark } from 'remark';
import html from 'remark-html';

export default async function Page({ params }) {
	const data = await getEventBySlug(params?.event);

	const pageData = await getPageSections(data?.data[0]?.id, `events`);

	const {
		Title: title,
		publishedAt,
		EventDetails,
		Blurb,
		Content,
	} = pageData?.data.attributes;

	// TODO: wire function with FormData
	const handleSubmit = () => {};

	return (
		<>
			<Hero
				reportTitle={title}
				Type="postSingle"
				publishedAt={publishedAt}
			/>
			<InnerContainer>
				<ContentContainer>
					<MetaDetails>
						<h3>Event Details</h3>
						<p>Date: {EventDetails.date}</p>
						<p>Time: {EventDetails.time}</p>
						<p>Location: {EventDetails.location}</p>
						<p>{Blurb}</p>
					</MetaDetails>
					<Divider />
					{/* Convert to html string */}
					<MainDetails
						dangerouslySetInnerHTML={{
							__html: (
								await remark().use(html).process(Content)
							).toString(),
						}}
					/>
				</ContentContainer>
				<SidebarContainer>
					<Sidebar>
						<h3>Register Here</h3>
						<sub>
							<span>*</span> indicates required field
						</sub>
						<form>
							{/* name field group */}
							<FieldGroup>
								<StyledInput
									aria-label="first name input"
									name="firstname"
									type="text"
									placeholder="First Name*"
									required
								/>
							</FieldGroup>
							{/* last name field group */}
							<FieldGroup>
								<StyledInput
									aria-label="last name input"
									name="lastname"
									type="text"
									placeholder="Last Name*"
									required
								/>
							</FieldGroup>
							{/* email field group */}
							<FieldGroup>
								<StyledInput
									aria-label="email input"
									name="email"
									type="email"
									placeholder="email"
									required
								/>
							</FieldGroup>
							{/* register button */}
							<FieldGroup>
								<StyledButton type="submit">
									Register
								</StyledButton>
							</FieldGroup>
						</form>
					</Sidebar>
				</SidebarContainer>
			</InnerContainer>
		</>
	);
}

const InnerContainer = styled.div`
	padding: 0 0 3rem 0;
`;
const ContentContainer = styled.div``;
const MetaDetails = styled.div``;
const Divider = styled.div``;
const MainDetails = styled.div``;
const SidebarContainer = styled.div``;
const Sidebar = styled.div``;
const FieldGroup = styled.div``;
const StyledInput = styled.input``;
const StyledButton = styled.button``;
