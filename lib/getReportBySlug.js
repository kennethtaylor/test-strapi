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

	console.log("pathname", pathname);
	console.log("data", data);

	const reportData = data?.data.filter((item) => {
		if (item.attributes.Slug == pathname) {
			return item;
		} else if (item.attributes.Slug == "home" && pathname == "/") {
			return item;
		}
	});

	return reportData;
}

export default getReportBySlug;
