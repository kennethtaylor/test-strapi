import getEventBySlug from '../../../lib/getEventBySlug';
import getPageSections from '@/lib/getPageSections';
import { EventPage } from '@/app/components/collections/EventPage';

export default async function Page({ params }) {
	const data = await getEventBySlug(params?.event);
	const pageData = await getPageSections(data?.data[0]?.id, `events`);

	return <EventPage pageData={pageData?.data.attributes} />;
}
