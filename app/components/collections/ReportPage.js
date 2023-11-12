'use client';

import sectionRenderer from '../../utils/sectionRenderer';
import Hero from '@/app/components/Hero';

export const ReportPage = ({ title, publishedAt, sections }) => {
	return (
		<>
			<Hero
				reportTitle={title}
				Type="postSingle"
				publishedAt={publishedAt}
			/>
			{sectionRenderer(sections)}
		</>
	);
};
