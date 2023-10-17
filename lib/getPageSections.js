const qs = require("qs");

async function getPageSections(id) {
	const query = qs.stringify({
		populate: {
			Sections: {
				on: {
					"layout.hero": {
						populate: "*",
					},
					"layout.title-text-cta": {
						populate: "*",
					},
					"layout.word-slider": {
						populate: "*",
					},
					"layout.about-us-feature": {
						populate: "*",
					},
					"layout.report-list": {
						populate: "*",
					},
					"layout.media-full-content": {
						populate: "*",
					},
					"layout.search-bar": {
						populate: "*",
					},
					"layout.feature-list": {
						populate: "*",
					},
					"layout.circle-feature": {
						populate: "*",
					},
					"layout.report-summary": {
						fields: ["createdBy"],
						populate: "*",
					},
					"layout.content-block": {
						populate: "*",
					},
					"layout.report-section": {
						populate: "*",
					},
				},
			},
		},
	});

	const res = await fetch(`${process.env.APP_URL}/api/pages/${id}?${query}`, {
		next: {
			revalidate: 100,
		},
	});

	const data = await res.json();

	if (!res.ok) {
		throw new Error("Failed to fetch");
	}

	const sections = data.data.attributes.Sections;

	console.log("sections: ", sections);

	return sections;
}

export default getPageSections;
