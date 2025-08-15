import {
  ABOUT,
  BLOG,
  CAREERS,
  CONTACT,
  COOKIE_POLICY,
  GITHUB,
  HOME,
  INSTAGRAM,
  LINKEDIN,
  PRIVACY_POLICY,
  TERMS_AND_CONDITIONS,
  TWITTER,
} from "../constant/global-key.const";
import { ROUTE_URL } from "../constant/routes.const";

export interface FooterLinkSection {
  title: string;
  links: { label: string; href: string }[];
}

export const footerSections: FooterLinkSection[] = [
  {
    title: "Product",
    links: [
      { label: HOME, href: ROUTE_URL.HOME },
      { label: BLOG, href: "#" },
    ],
  },

  {
    title: "Company",
    links: [
      { label: CONTACT, href: ROUTE_URL.CONTACT },
      { label: ABOUT, href: ROUTE_URL.ABOUT },
      { label: CAREERS, href: ROUTE_URL.CAREERS },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: PRIVACY_POLICY, href: ROUTE_URL.PRIVACY_POLICY },
      { label: TERMS_AND_CONDITIONS, href: ROUTE_URL.TERMS_AND_CONDITIONS },
      { label: COOKIE_POLICY, href: ROUTE_URL.COOKIE_POLICY },
    ],
  },
];

export const socialLinks = [
  {
    label: LINKEDIN,
    href: "https://in.linkedin.com/company/dsrsecuretech",
    icon: "linkedin",
  },
  { label: TWITTER, href: "https://x.com/DSR_Techies", icon: "twitter" },
  {
    label: INSTAGRAM,
    href: "https://www.instagram.com/dsrsecuretech",
    icon: "instagram",
  },
  { label: GITHUB, href: "#", icon: "github" },
];
