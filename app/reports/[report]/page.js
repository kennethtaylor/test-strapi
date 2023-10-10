"use client";
import sectionRenderer from "../../utils/sectionRenderer";
import getReportBySlug from "../../../lib/getReportBySlug";
import { getServerSession } from "next-auth";
import Hero from "@/app/components/Hero";

export default async function Page({ params }) {
	const data = await getReportBySlug(params?.report);
	const sections = await data.data[0]?.attributes?.Sections;

	const title = data.data[0]?.attributes?.Title;
	const publishedAt = data.data[0]?.attributes?.publishedAt;

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
