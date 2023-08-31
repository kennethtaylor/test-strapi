import { headers } from "next/headers";
import sectionRenderer from "./utils/sectionRenderer";
import getPageBySlug from "../lib/getPageBySlug";

export default async function Page(props) {
	const headersList = headers();
	const pathname = headersList.get("x-invoke-path") || "";

	const data = await getPageBySlug(pathname);
	const sections = data[0]?.attributes?.Sections;

	return sectionRenderer(sections);
}
