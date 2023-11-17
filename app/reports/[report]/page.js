'use client';
import sectionRenderer from '../../utils/sectionRenderer';
import getReportBySlug from '../../../lib/getReportBySlug';
import { getServerSession } from 'next-auth';

export async function generateStaticParams() {
	const res = await fetch(`${process.env.APP_URL}/api/reports`);
	const data = await res.json();

	if (!res.ok) {
		throw new Error('Failed to fetch');
	}

	const paths = data?.data.map((item) => {
		return {
			params: {
				report: item.attributes.Slug,
			},
		};
	});

	return paths;
}

export default async function Page({ params }) {
	const data = await getReportBySlug(params?.report);
	const sections = data[0]?.attributes?.Sections;
	const session = await getServerSession();

	if (session) {
		console.log('session here');
		console.log(session?.user);
	}

	const title = data?.data[0]?.attributes?.Title;
	const publishedAt = data?.data[0]?.attributes?.publishedAt;

	return (
		<ReportPage
			title={title}
			publishedAt={publishedAt}
			sections={sections}
		/>
	);
}
