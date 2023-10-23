"use client";
import sectionRenderer from "../../utils/sectionRenderer";
import getReportBySlug from "../../../lib/getReportBySlug";
import Hero from "@/app/components/Hero";
import getPageSections from "@/lib/getPageSections";

export default async function Page({ params }) {
	const data = await getReportBySlug(params?.report);

	const sections = await getPageSections(data?.data[0]?.id, `reports`);

	const title = data?.data[0]?.attributes?.Title;
	const publishedAt = data?.data[0]?.attributes?.publishedAt;

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
}
