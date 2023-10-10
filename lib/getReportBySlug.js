async function getReportBySlug(pathname) {
	const res = await fetch(
		`${process.env.APP_URL}/api/reports?filters[slug][$eq]=${pathname}&populate=deep`,
		{
			next: {
				revalidate: 100,
			},
		}
	);

	const data = await res.json();

	if (!res.ok) {
		throw new Error("Failed to fetch");
	}

	const reportData = data;

	return reportData;
}

export default getReportBySlug;
