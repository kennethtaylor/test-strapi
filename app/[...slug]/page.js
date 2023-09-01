import { headers } from "next/headers";
import sectionRenderer from "../utils/sectionRenderer";
import getPageBySlug from "../../lib/getPageBySlug";

export async function generateStaticParams() {
	const res = await fetch(`${process.env.APP_URL}/api/pages`);
	const data = await res.json();

	if (!res.ok) {
		throw new Error("Failed to fetch");
	}

	const paths = data?.data.map((item) => {
		return {
			params: {
				page: item.attributes.Slug,
			},
		};
	});

	return paths;
}

export default async function Page({ params }) {
	const data = await getPageBySlug(params.slug[0]);
	const sections = data[0]?.attributes?.Sections;

	return sectionRenderer(sections);
}
