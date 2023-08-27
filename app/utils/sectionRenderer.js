import BasicSlider from "../components/BasicSlider";
import Hero from "../components/Hero";
import TitleLeftTextCtaRight from "../components/TitleLeftTextCtaRight";
import AboutUsFeature from "../components/AboutUsFeature";
import MediaText from "../components/MediaText";
import ReportList from "../components/ReportList";

export default function sectionRenderer(sections, index) {
	const sectionsToDisplay = [];
	console.log(sections);

	sections?.map((section, index) => {
		switch (section.__component) {
			case "layout.hero":
				sectionsToDisplay.push(
					<Hero key={`section-${index}`} {...section} />
				);
				break;
			case "layout.title-text-cta":
				sectionsToDisplay.push(
					<TitleLeftTextCtaRight
						key={`section-${index}`}
						{...section}
					/>
				);
				break;
			case "layout.word-slider":
				sectionsToDisplay.push(
					<BasicSlider key={`section-${index}`} {...section} />
				);
				break;
			case "layout.about-us-feature":
				sectionsToDisplay.push(
					<AboutUsFeature key={`section-${index}`} {...section} />
				);
				break;
			case "layout.report-list":
				sectionsToDisplay.push(
					<ReportList key={`section-${index}`} {...section} />
				);
				break;
			case "layout.media-full-content":
				sectionsToDisplay.push(
					<MediaText key={`section-${index}`} {...section} />
				);
				break;
			default:
				sectionsToDisplay.push(<div>Section not found</div>);
		}
	});

	return sectionsToDisplay;
}
