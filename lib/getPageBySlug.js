async function getPageBySlug(pathname) {
	const res = await fetch(`${process.env.APP_URL}/api/pages`, {
		next: {
			revalidate: 100,
		},
	});

	const data = await res.json();

	if (!res.ok) {
		throw new Error("Failed to fetch");
	}

	const pageData = data?.data.filter((item) => {
		if (item.attributes.Slug == pathname) {
			return item;
		} else if (item.attributes.Slug == "home" && pathname == "/") {
			return item;
		}
	});

	return pageData;
}

export default getPageBySlug;
