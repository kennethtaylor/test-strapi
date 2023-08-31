import { useState, useEffect } from "react";

export default function usePageBySlug(slug) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setILoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				`${process.env.APP_URL}/api/pages?filters[slug][$eq]=${
					slug == "/" ? "home" : slug
				}&populate=deep`
			);
			const tempData = await res.json();
			setData(tempData);
		};
		fetchData();
	}, []);

	return { data, error, isLoading };
}
