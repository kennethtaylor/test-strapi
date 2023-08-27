"use client";

import { usePathname } from "next/navigation";

import usePageBySlug from "./hooks/usePageBySlug";
import sectionRenderer from "./utils/sectionRenderer";

export default function Home({ children }) {
	const pathname = usePathname();
	const { data, error, isLoading } = usePageBySlug(pathname);
	const sections = data?.data[0].attributes.Sections;

	if (error) return <div>Error</div>;
	if (isLoading) return <div>Loading...</div>;

	return sectionRenderer(sections);
}
