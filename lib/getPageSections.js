const qs = require("qs");

async function getPageSections(id, type = `pages`) {
	console.log("arguments: ", arguments);
	const query = qs.stringify(
		{
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
							reports: {
								fields: ["author"],
								populate: "*",
							},
						},
						"layout.media-full-content": {
							populate: "*",
						},
						"layout.feature-list": {
							populate: "*",
						},
						"layout.form": {
							populate: "*",
						},
						"layout.search-bar": {
							populate: "*",
						},
						"layout.report-summary": {
							populate: "*",
						},
						"layout.content-block": {
							populate: "*",
						},
						"layout.report-section": {
							populate: "*",
						},
						"layout.event-list": {
							fields: ["author"],
							populate: "*",
						},
					},
				},
			},
		},
		{
			encodeValuesOnly: true,
		}
	);

	// const query = qs.stringify(
	// 	{
	// 		populate: [
	// 			"Sections.about-us-feature",
	// 			"Sections.hero",
	// 			"Sections.media-full-content",
	// 			"Sections.report-list",
	// 			"Sections.report-section",
	// 			"Sections.report-summary",
	// 			"Sections.search-bar",
	// 			"Sections.title-text-cta",
	// 			"Sections.word-slider",
	// 			"seo.metadata",
	// 			"Sections.analysts-grid",
	// 			"Sections.circle-feature",
	// 			"Sections.content-block",
	// 			"Sections.feature-list",
	// 			"Sections.form",
	// 			"Sections.three-fourth-content",
	// 		],
	// 	},
	// 	{
	// 		encodeValuesOnly: true,
	// 	}
	// );

	console.log(`${process.env.APP_URL}/api/${type}/${id}?${query}`);

	const res = await fetch(
		`${process.env.APP_URL}/api/${type}/${id}?${query}`,
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

	const sections = data.data.attributes.Sections;

	return sections;
}

export default getPageSections;
