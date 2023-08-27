"use client";
import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FullLogo from '../../public/images/FullLogoWhite.svg?url';
import LinkedIn from '../../public/images/icons/LinkedInWhite.svg?url';

const StyledFooter = styled.footer`
	width: 100%;
	padding: 4rem 0rem 1rem 0rem;
	display: inline-block;
	margin: auto;
	background: var(--darkblue);
`;
const FooterContainer = styled.div`
	display: flex;
	padding: 0rem 2rem;
	justify-content: space-between;
	align-items: flex-start;
	gap: 2rem;

	& .column.one address {
		padding: 2rem 0;
		font-size: var(--nav);
		font-family: var(--sans-serif);
		color: var(--white);
		font-weight: 400;
		font-style: normal;
	}

	& .column.one .LogoContainer {
		width: calc(25vw * 1);
		position: relative;
	}

	& .column.one .LogoContainer img {
		width: 100%;
		height: auto;
		max-width: 100%;
	}

	& .column.two {
		display: flex;
		justify-content: space-between;
		gap: 8rem;
	}

	& .column.two .socialContainer {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	& .footerLinks {
		padding: 0 0 2rem 0;
	}

	& .footerLinks,
	& .policyMenu {
		list-style: none;
	}

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
		opacity: 0.8;
	}

`;

const CopyRight = styled.div`
	border-top: 1px solid rgba(255,255,255,0.3);
	width: 100%;
	display: inline-block;
	padding: 1rem 0 0 0rem;
	& p {
		color: var(--white);
		width: 100%;
		margin: auto;
		text-align: center;
		font-size: var(--nav);
		font-family: var(--sans-serif);
		font-weight: 400;
		font-style: normal;
	}
`;

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<StyledFooter>
		<FooterContainer>
			<div className="column one">
				<div className="LogoContainer">
					<Image src={FullLogo} alt="22VI logo" width={473} height={103}/>
				</div>
				<address>1234 Address Here<br/>New York, NY 1234</address>
			</div>
			<div className="column two">
				<div className="columninner">
					<ul className="footerLinks">
						<li><Link href="/reports">Reports</Link></li>
						<li><Link href="/events">Events</Link></li>
						<li><Link href="/company">Company</Link></li>
						<li><Link href="/contact">Contact</Link></li>
					</ul>
					<div className="socialContainer">
						<Image src={LinkedIn} alt="LinkedIn logo" width={20} height={20}/>
					</div>
				</div>
				<div className="columninner">
					<ul className="policyMenu">
						<li><Link href="/disclosures">Disclosures</Link></li>
						<li><Link href="/terms">Terms</Link></li>
						<li><Link href="/cookie-policy">Cookie Policy</Link></li>
						<li><Link href="/privacy-policy">Privacy Policy</Link></li>
						<li><Link href="/ada-statement">ADA Statement</Link></li>
					</ul>
				</div>
			</div>
		</FooterContainer>

		<CopyRight>
			<p>22VI ©{currentYear}. All Rights Reserved.</p>
		</CopyRight>
		</StyledFooter>
	);
}
