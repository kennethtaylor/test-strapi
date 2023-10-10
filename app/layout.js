"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// import { gsap } from "gsap/dist/gsap";
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
// gsap.registerPlugin(ScrollSmoother);

import StyledComponentsRegistry from "../lib/registry";
import { usePathname } from "next/navigation";

export default function RootLayout(props) {
	const { children } = props;
	const pathname = usePathname();

	// const headersList = headers();
	// const pathname = headersList.get("x-invoke-path") || "";

	// const el = useRef();
	// const q = gsap.utils.selector(el);

	// let smoother;
	// function smootherSetup() {
	// 	smoother = ScrollSmoother.create({
	// 		smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
	// 		effects: true, // looks for data-speed and data-lag attributes on elements
	// 		smoothTouch: 0.1,
	// 	});
	// }

	// useEffect(() => {
	// 	let smoother = ScrollSmoother.create({
	// 		smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
	// 		effects: true, // looks for data-speed and data-lag attributes on elements
	// 		smoothTouch: 0.1,
	// 	});

	// 	gsap.utils.toArray(".siteLinks a").forEach(function (button, i) {
	// 		button.addEventListener("click", (e) => {
	// 			var id = e.target.getAttribute("href");

	// 			smoother.scrollTo(id.replace("/", ""), true, "top top");
	// 			e.preventDefault();
	// 		});
	// 	});

	// 	// to view navigate to -  https://cdpn.io/pen/debug/XWVvMGr#section3
	// 	window.onload = (event) => {
	// 		let urlHash = window.location.href.split("#")[1];

	// 		let scrollElem = document.querySelector("#" + urlHash);

	// 		// console.log(scrollElem, urlHash);

	// 		if (urlHash && scrollElem) {
	// 			gsap.to(smoother, {
	// 				scrollTop: smoother.offset(scrollElem, "top top"),
	// 				duration: 1,
	// 				delay: 0.5,
	// 			});
	// 		}
	// 	};
	// }, []);

	return (
		<html lang="en">
			<body className={inter.className} data-page={pathname}>
				<StyledComponentsRegistry>
					<Header />
					<main>{children}</main>
					<Footer />
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
