import BasicSlider from "../components/BasicSlider";
import Hero from "../components/Hero";
import TitleLeftTextCtaRight from "../components/TitleLeftTextCtaRight";
import AboutUsFeature from "../components/AboutUsFeature";
import MediaText from "../components/MediaText";
import ReportList from "../components/ReportList";

export default function sectionRenderer(section, index) {
	switch (section.__component) {
		case "layout.hero":
			return <Hero key={`section-${index}`} {...section} />;
		case "layout.title-text-cta":
			return (
				<TitleLeftTextCtaRight key={`section-${index}`} {...section} />
			);
		case "layout.word-slider":
			return <BasicSlider key={`section-${index}`} {...section} />;
		case "layout.about-us-feature":
			return <AboutUsFeature key={`section-${index}`} {...section} />;
		case "layout.report-list":
			return <ReportList key={`section-${index}`} {...section} />;
		case "layout.media-full-content":
			return <MediaText key={`section-${index}`} {...section} />;
		default:
			return <div>Section not found</div>;
	}
}
