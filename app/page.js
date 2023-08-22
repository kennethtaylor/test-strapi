"use client";

import { usePathname } from "next/navigation";

import getPageBySlug from "./hooks/getPageBySlug";
import sectionRenderer from "./utils/sectionRenderer";

export default function Home({ children }) {
	const pathname = usePathname();
	const { data, error, isLoading } = getPageBySlug(pathname);
	const sections = data?.data[0].attributes.Sections;

	console.log(sections);

	return (
		<>
			{!isLoading &&
				sections?.map((section, index) =>
					sectionRenderer(section, index)
				)}
		</>
	);
}
