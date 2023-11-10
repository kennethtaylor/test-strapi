'use client';
import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import FullLogo from '../../public/images/FullLogoWhite.svg?url';
import Spotify from '../../public/images/icons/Spotify.svg?url';
import LinkedIn from '../../public/images/icons/LinkedInWhite.svg?url';

const StyledFooter = styled.footer`
	width: 100%;
	padding: 6rem 0rem 6rem 0rem;
	display: inline-block;
	margin: -5px 0 0 0;
	background: var(--darkblue);
`;
const FooterContainer = styled.div`
	display: flex;
	padding: 0rem 3rem 0rem 3rem;
	justify-content: space-between;
	align-items: flex-start;
	gap: 2rem;

	& .column.one .LogoContainer {
		width: 100%;
		max-width: 150px;
		position: relative;
	}

	& .column.one .LogoContainer img {
		width: 100%;
		height: auto;
		max-width: 100%;
	}

	& .column.three address {
		padding: 0.5rem 0 1rem 0;
		font-size: var(--nav);
		font-family: var(--sans-serif);
		color: var(--white);
		text-transform: uppercase;
		line-height: 1.5;
		letter-spacing: 0.1rem;
		font-weight: 400;
		font-style: normal;
	}

	& .columnlabel {
		color: var(--white);
		font-family: var(--sans-serif);
		font-size: var(--nav);
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		padding: 0 0 1rem 0;
	}

	& .column.three .socialContainer {
		display: flex;
		gap: 1rem;
		align-items: center;
		list-style: none;
		padding: 1rem 0 0 0;
	}

	& .footerLinks {
		padding: 0 0 2rem 0;
	}

	& .contactLinks,
	& .footerLinks,
	& .policyMenu {
		list-style: none;
	}

	& .contactLinks li,
	& .footerLinks li,
	& .policyMenu li {
		color: var(--white);
		font-size: var(--nav);
		font-family: var(--sans-serif);
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		line-height: 2;
	}
	& .policyMenu li {
		opacity: 0.6;
	}

	& .policyMenu li.copyright {
		padding: 1rem 0 0 0;
		opacity: 1;
		max-width: 200px;
		text-transform: none;
		letter-spacing: 0;
		line-height: 1.5;
	}

	.mobileContent {
		display: none;
	}

	@media only screen and (max-width: 900px) {
		& {
			flex-wrap: wrap;
		}
		& .column.three,
		& .column.four,
		& .column.two {
			width: calc(50% - 1rem);
			position: relative;
		}
		& .column.one .LogoContainer {
			width: 100%;
			max-width: 150px;
		}
		& .column.one .LogoContainer img {
			width: 100%;
			max-width: 300px;
			height: auto;
		}
		& .column.three,
		& .column.four {
			padding: 2rem 0 0 0rem;
		}
	}
	@media only screen and (max-width: 700px) {
		.mobileContent {
			display: block;
		}
		.column.three,
		.column.four {
			display: none;
		}
		& .column.two .socialContainer {
			display: flex;
			gap: 1rem;
			align-items: center;
			list-style: none;
			padding: 1rem 0 2rem 0;
		}
		& .column.two address {
			padding: 0.5rem 0 1rem 0;
			font-size: var(--nav);
			font-family: var(--sans-serif);
			color: var(--white);
			text-transform: uppercase;
			line-height: 1.5;
			letter-spacing: 0.1rem;
			font-weight: 400;
			font-style: normal;
		}
	}
	@media only screen and (max-width: 537px) {
		& {
			padding: 0rem 2rem 0rem 2rem;
		}
		& .column.one {
			width: calc(40% - 1rem);
		}
		& .column.two {
			width: calc(60% - 2rem);
		}
	}
`;

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<StyledFooter>
			<FooterContainer>
				<div className="column one">
					<div className="LogoContainer">
						<Image
							src={FullLogo}
							alt="22VI logo"
							width={174}
							height={203}
						/>
					</div>
				</div>
				<div className="column two">
					<p className="columnlabel">Twenty Two VI</p>
					<ul className="footerLinks">
						<li>
							<Link to="/reports" onClick={() => {window.location.href="/reports"}} href="/reports">Reports</Link>
						</li>
						<li>
							<Link to="/webinars" onClick={() => {window.location.href="/webinars"}} href="/webinars">Webinars</Link>
						</li>
						<li>
							<Link to="/events" onClick={() => {window.location.href="/events"}} href="/events">Events</Link>
						</li>
						<li>
							<Link  to="/company" onClick={() => {window.location.href="/company"}} href="/company">About</Link>
						</li>
					</ul>
					<div className="mobileContent">
						<p className="columnlabel">Connect</p>
						<ul className="contactLinks">
							<li>
								<Link to="/contact" onClick={() => {window.location.href="/contact"}} href="/contact">Contact Us</Link>
							</li>
						</ul>
						<address>
							1234 Address Here
							<br />
							New York, NY 1234
						</address>
						<ul className="socialContainer">
							<li>
								<Image
									src={LinkedIn}
									alt="LinkedIn logo"
									width={20}
									height={20}
								/>
							</li>
							<li>
								<Image
									src={Spotify}
									alt="Spotify logo"
									width={20}
									height={20}
								/>
							</li>
						</ul>

						<p className="columnlabel">Legal</p>
						<ul className="policyMenu">
							<li>
								<Link to="/terms" onClick={() => {window.location.href="/terms"}} href="/terms">Terms of Use</Link>
							</li>
							<li>
								<Link to="/privacy-policy" onClick={() => {window.location.href="/privacy-policy"}} href="/privacy-policy">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link to="/ada-statement" onClick={() => {window.location.href="/ada-statement"}} href="/ada-statement">Accessibility</Link>
							</li>
							<li>
								<Link to="/disclosures" onClick={() => {window.location.href="/disclosures"}} href="/disclosures">Disclosures</Link>
							</li>
							<li className="copyright">
								Twenty Two VI ©{currentYear}. All Rights
								Reserved.
							</li>
						</ul>
					</div>
				</div>

				<div className="column three">
					<p className="columnlabel">Connect</p>
					<ul className="contactLinks">
						<li>
							<Link to="/contact" onClick={() => {window.location.href="/contact"}} href="/contact">Contact Us</Link>
						</li>
					</ul>
					<address>
						1234 Address Here
						<br />
						New York, NY 1234
					</address>
					<ul className="socialContainer">
						<li>
							<Image
								src={LinkedIn}
								alt="LinkedIn logo"
								width={20}
								height={20}
							/>
						</li>
						<li>
							<Image
								src={Spotify}
								alt="Spotify logo"
								width={20}
								height={20}
							/>
						</li>
					</ul>
				</div>

				<div className="column four">
					<p className="columnlabel">Legal</p>
					<ul className="policyMenu">
						<li>
							<Link to="/terms" onClick={() => {window.location.href="/terms"}} href="/terms">Terms of Use</Link>
						</li>
						<li>
							<Link to="/privacy-policy" onClick={() => {window.location.href="/privacy-policy"}} href="/privacy-policy">Privacy Policy</Link>
						</li>
						<li>
							<Link to="/ada-statement" onClick={() => {window.location.href="/ada-statement"}} href="/ada-statement">Accessibility</Link>
						</li>
						<li>
							<Link to="/disclosures" onClick={() => {window.location.href="/disclosures"}} href="/disclosures">Disclosures</Link>
						</li>
						<li className="copyright">
							Twenty Two VI ©{currentYear}. All Rights Reserved.
						</li>
					</ul>
				</div>
			</FooterContainer>
		</StyledFooter>
	);
}
