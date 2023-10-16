import { headers } from "next/headers";
import sectionRenderer from "./utils/sectionRenderer";
import getPageBySlug from "../lib/getPageBySlug";
import getPageSections from "@/lib/getPageSections";

export default async function Page(props) {
	const data = await getPageBySlug("/");
	const sections = await getPageSections(data[0].id);

	return sectionRenderer(sections);
}
