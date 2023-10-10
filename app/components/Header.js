"use client";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from '../../public/images/icons/searchIcon.svg?url';
import AngledArrow from '../../public/images/icons/angledArrow.svg?url';
import Logo from '../../public/images/logoWhite.svg?url';
import LinkedIn from '../../public/images/icons/LinkedInWhite.svg?url';
import CloseIcon from '../../public/images/icons/closeIconBlack.svg?url';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StyledHeader = styled.header`
	width: 100%;
	display: inline-block;

	& .sitebranding {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
	}
	
	& .sitebranding.sticky {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
		background: var(--darkblue);
	}
`;

const TopBar = styled.div`
	width: 100%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--darkblue);
	padding:1rem 2rem;
	border-bottom: 0.5px solid rgba(255,255,255,0.2);
`;

const AnnoucementText = styled.p`
	font-size: var(--nav);
	font-family: var(--sans-serif);
	font-weight: 400;
	font-style: normal;
	color: var(--white);
`;
const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 1.5rem 2rem 1rem 2rem;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	background: transparent;
	transition: 0.3s ease all;

	.sitebranding.sticky & {
		background: var(--darkblue);
		padding: 0.7rem 2rem;
		align-items: center;
	}
`;

const NavContainerLeft = styled.div`
	display: flex;
	align-items: center;
	gap: 4rem;
	width: calc(50% - 2rem);
	transition: 0.3s ease all;

	& .headerLogo {
		width: 100%;
		max-width: 100px;
		height: auto;
		transition: 0.3s ease all;
	}
	.sitebranding.sticky & .headerLogo {
		max-width: 50px;
		height: auto;
	}
`;
const NavContainerRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 2rem;
	width: calc(50% - 2rem);

	@media only screen and (max-width: 600px) {
		& nav {
			display: none;
		}
	}
`;

const NavSection = styled.nav`
	display: flex;
	align-items: center;
	gap: 2rem;
	color: var(--white);
	font-size: var(--nav);
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	font-family: var(--sans-serif);
	font-weight: 400;
	font-style: normal;

	& .linkwbtn {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		transition: 0.3s ease all;
	}
	& .linkwbtn:hover img{
		filter: invert(0.4) sepia(1) saturate(20) hue-rotate(360deg) brightness(1.04);
	}
	& .primaryBtn {
		position: relative;
		color: var(--white);
		padding: 0.5rem 1.5rem;
		background: transparent !important;
	}

	& .primaryBtn,
	& .primaryBtn .background,
	& .primaryBtn .border {
		border-radius: 9.2rem;
  	}

	& .primaryBtn::before {
		background: linear-gradient(163deg, rgba(255,185,1,1) 0%, rgba(255,127,0,1) 45%, rgba(254,99,18,1) 89%, rgba(253,98,32,1) 100%) border-box;
	}

	& .primaryBtn .background,
	& .primaryBtn .border {
   		position: absolute;
    	top: 0;
    	left: 0;
    	bottom: 0;
    	right: 0;
	}

	& .primaryBtn .background {
		background: var(--orange-gradient-linear) border-box;
		opacity: 0;
		transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	& .primaryBtn:hover .background {
		opacity: 1;
	}

	  & .primaryBtn .border {
		border: 1px solid transparent;
		background: linear-gradient(163deg, rgba(255,185,1,1) 0%, rgba(255,127,0,1) 45%, rgba(254,99,18,1) 89%, rgba(253,98,32,1) 100%) border-box;
		background: linear-gradient(163deg, rgba(255,185,1,1) 0%, rgba(255,127,0,1) 45%, rgba(254,99,18,1) 89%, rgba(253,98,32,1) 100%) border-box;
			-webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: destination-out;
		mask-composite: exclude;
	  }

	  & .primaryBtn span {
		color: #fff;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		position: relative;
		z-index: 1;
	  }
`;

const Hamburger = styled.div`
	margin: 0rem 1rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    height: 1.1rem;
    width: 2rem;
	min-width: 2rem;
    cursor: pointer;

	& .barTop {
		height: 1px;
		background: var(--white);
		border-radius: 0px;
		margin: 0 0 3px 0;
		transform-origin: left;
		transition: all 0.5s;
	}
	& .barMiddle {
		height: 1px;
		background: var(--white);
		border-radius: 0px;
		margin: 0 0 3px 0;
		transform-origin: left;
		transition: all 0.5s;
	}
`;

const MobileMenu = styled.div`
	position: fixed;
	right: -100%;
	top: 1rem;
	bottom: 1rem;
	z-index: 100;
	width: 40%;
	height: calc(100vh - 2rem);
	background: var(--white);
	border-radius: 1rem;
	transition: 0.5s ease all;

	&.open {
		right: 1rem;
	}

	& .closeContainer {
		position: absolute;
		top: 1rem;
		right: 1rem;
		cursor: pointer;
		width: calc(1.5vw * 1);
	}

	& .closeContainer img {
		width: 100%;
		height: auto;
	}

	@media only screen and (max-width: 1680px) {
		& {
			max-width: 450px;
		}
	}
	@media only screen and (max-width: 820px) {
		& {
			max-width: 80%;
			width: 100%;
		}
		& .closeContainer {
			position: absolute;
			top: 1rem;
			right: 1rem;
			cursor: pointer;
			width: 1.5rem;
		}
	}
	@media only screen and (max-width: 600px) {
		& {
			max-width: 100%;
			width: 90%;
		}
	}
`;
const MobileMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
	height: 100%;
`;

const TopMenu = styled.div`
	padding: 4rem 2rem 0 2rem;

	.largeMenu, 
	.smallMenu {
		list-style: none;
	}

	.smallMenu {
		border-top: 1px solid var(--slate);
		margin-top: 1rem;
		padding-top: 1rem;
	}

	.largeMenu li {
		font-size: var(--sub-heading);
		font-weight: 500;
		letter-spacing: 0.15rem;
		line-height: 2;
	}
	.largeMenu li, 
	.smallMenu li {
		font-family: var(--sans-serif);
		text-transform: uppercase;
	}
	.smallMenu li {
		letter-spacing: 0.1rem;
		font-size: var(--nav);
		line-height: 2.5;
	}
	.smallMenu .linkwbtn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.smallMenu .linkwbtn img {
		filter: invert(1);
	}
`;

const BottomMenu = styled.div`
	width: 100%;
	display: flex;
	padding: 2rem 2rem;
	gap: 2rem;
	align-items: flex-start;
	justify-content: space-between;
	position: relative;
	border-radius: 0 0 1rem 1rem;
	background: var(--darkblue-gradient-linear);
	background: var(--darkblue-gradient-moz);
	background: var(--darkblue-gradient-webkit);

	& address {
		color: var(--white);
		font-style: normal;
		font-weight: 400;
		font-size: var(--nav);
		font-family: var(--sans-serif);
		line-height: 1.5;
	}

	& .socialContainer {
		display: flex;
		gap: 1rem;
		align-items: center;
		padding: 1rem 0 0 0;
	}

	& .policyMenu {
		list-style: none;
	}
	& .policyMenu li {
		color: var(--white);
		font-size: var(--nav);
		font-family: var(--sans-serif);
		font-weight: 400;
		font-style: normal;
		text-transform: uppercase;
		line-height: 2;
		letter-spacing: 0.1rem;
	}
`;

const Underlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0;
	z-index: -1;
	background: rgba(0,0,0,0.7);
	transition: opacity 0.5s ease;

	&.open {
		z-index: 99;
		opacity: 1;
	}
`;

export default function Header() {
	const [navIsOpen, setNavIsOpen] = useState(false);

    function toggleNav() {
		setNavIsOpen(!navIsOpen);
	}

	useEffect(() => {
		ScrollTrigger.create({
			start: "top 0",
			end: 99999,
			toggleClass: { className: "sticky", targets: ".sitebranding" },
		});
	}, []);

	return (
		<StyledHeader>
			<div className="sitebranding">
			<TopBar>
				<AnnoucementText>
				Optional Announcement Text
				</AnnoucementText>
				<NavSection>
						<Image src={SearchIcon} alt="search icon" width={20} height={20}/>
						<Link className="linkwbtn" href="#">
							Log In <Image src={AngledArrow} alt="angled arrow" width={15} height={15}/>
						</Link>
						<Link href="#">
							<div className="primaryBtn">
								<span>Sign Up <Image src={AngledArrow} alt="angled arrow" width={15} height={15}/></span>
								<div className="border"></div>
        						<div className="background"></div>
							</div>
						</Link>
				</NavSection>
			</TopBar>
			<HeaderContainer>
				<NavContainerLeft>
						<Image className="headerLogo" src={Logo} alt="22VI Logo" width={68} height={92}/>
				</NavContainerLeft>

				<NavContainerRight>
					<NavSection>
						<Link href="/reports">Reports</Link>
						<Link href="/events">Events</Link>
						<Link href="/events">About</Link>
					</NavSection>
					<Hamburger onClick={() => toggleNav()}>
						<div className="barTop"></div>
						<div className="barMiddle"></div>
					</Hamburger>
				</NavContainerRight>
			</HeaderContainer>
			</div>

			<MobileMenu className={navIsOpen ? "open" : ""}>
				<div className="closeContainer" onClick={() => toggleNav()}>
					<Image src={CloseIcon} alt="close icon" width={20} height={20}/>
				</div>

				<MobileMenuContainer>
					<TopMenu>
						<ul className="largeMenu">
							<li><Link href="/reports">Reports</Link></li>
							<li><Link href="/events">Events</Link></li>
							<li><Link href="/company">Company</Link></li>
							<li><Link href="/contact">Contact</Link></li>
						</ul>
						<ul className="smallMenu">
							<li><Link className="linkwbtn" href="#">Log In <Image src={AngledArrow} alt="angled arrow" width={15} height={15}/></Link></li>
							<li><Link className="linkwbtn" href="#">Sign Up <Image src={AngledArrow} alt="angled arrow" width={15} height={15}/></Link></li>
						</ul>
					</TopMenu>

					<BottomMenu>
						<div className="column">
							<address>1234 Main Street
							<br/>Anytown, USA 12345
							</address>

							<div className="socialContainer">
								<Image src={LinkedIn} alt="linkedin icon" width={20} height={20}/>
							</div>
						</div>
						<div className="column">
							<ul className="policyMenu">
								<li><Link href="/disclosures">Disclosures</Link></li>
								<li><Link href="/terms">Terms</Link></li>
								<li><Link href="/cookie-policy">Cookie Policy</Link></li>
								<li><Link href="/privacy-policy">Privacy Policy</Link></li>
								<li><Link href="/ada-statement">ADA Statement</Link></li>
							</ul>
						</div>
					</BottomMenu>
				</MobileMenuContainer>
			</MobileMenu>

			<Underlay className={navIsOpen ? "open" : ""}></Underlay>
			
		</StyledHeader>
	);
}
