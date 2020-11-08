import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
	FaTwitter
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
	FooterContainer,
	FooterSubscription,
	FooterSubHeading,
	FooterSubText,
	Form,
	FormInput,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinksItem,
	FooterLinksTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcon,
	SocialIcons,
	SocialIconLink
} from "./Footer.elements";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterSubscription>
				<FooterSubHeading>
					Join our exclusive membership to receive the latest news and trends
				</FooterSubHeading>
				<FooterSubText>You can unsubscribe at any time.</FooterSubText>
				<Form>
					<FormInput name="email" type="email" placeholder="Your Email" />
					<Button fontBig>Subscribe</Button>
				</Form>
			</FooterSubscription>
			<FooterLinksContainer>
				<FooterLinksWrapper>
					<FooterLinksItem>
						<FooterLinksTitle>About us</FooterLinksTitle>
						<FooterLink to="/sign-up">How it works</FooterLink>
						<FooterLink to="/">Testimonial</FooterLink>
						<FooterLink to="/">Careers</FooterLink>
						<FooterLink to="/">Investor</FooterLink>
						<FooterLink to="/">Terms of Service</FooterLink>
					</FooterLinksItem>
					<FooterLinksItem>
						<FooterLinksTitle>Contact us</FooterLinksTitle>
						<FooterLink to="/">Contact</FooterLink>
						<FooterLink to="/">Support</FooterLink>
						<FooterLink to="/">Destinations</FooterLink>
						<FooterLink to="/">Sponsorships</FooterLink>
					</FooterLinksItem>
				</FooterLinksWrapper>
				<FooterLinksWrapper>
					<FooterLinksItem>
						<FooterLinksTitle>Videos</FooterLinksTitle>
						<FooterLink to="/">Submit Video</FooterLink>
						<FooterLink to="/">Ambassador</FooterLink>
						<FooterLink to="/">Agency</FooterLink>
						<FooterLink to="/">Influencer</FooterLink>
					</FooterLinksItem>
					<FooterLinksItem>
						<FooterLinksTitle>Social Media</FooterLinksTitle>
						<FooterLink to="/">Instagram</FooterLink>
						<FooterLink to="/">Facebook</FooterLink>
						<FooterLink to="/">Youtube</FooterLink>
						<FooterLink to="/">Twitter</FooterLink>
					</FooterLinksItem>
				</FooterLinksWrapper>
			</FooterLinksContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to="/">
						<SocialIcon />
						ULTRA
					</SocialLogo>
					<WebsiteRights>ULTRA © 2020</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href="/" target="_blank" aria-label="Facebook">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Instagram">
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink
							href={
								"https://www.youtube.com/channel/UCo_H9ayDpakWlnIWau9SO3w?view_as=subscriber"
							}
							target="_blank"
							aria-label="Youtube"
							rel="noopener noreferrer"
						>
							<FaYoutube />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Twitter">
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Linkedin">
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
