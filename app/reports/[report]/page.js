'use client';

import getReportBySlug from '../../../lib/getReportBySlug';
import { getServerSession } from 'next-auth';
import { ReportPage } from '@/app/components/collections/ReportPage';
import { notFound } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getSession } from 'next-auth/react';

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

export default async function Page({ params: { report } }) {
	if (!report) notFound();

	const data = await getReportBySlug(report);

	const session = await getServerSession(authOptions);

	if (session) {
		console.log('session here');
		console.log(session?.user);
	}

	const sections = data[0]?.attributes?.Sections;

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
