import type { GatsbyConfig } from "gatsby";
import { config as i18nConfig } from "./src/constants/i18n";

const config: GatsbyConfig = {
	plugins: [
		"gatsby-plugin-vanilla-extract",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "assets",
				path: `${__dirname}/src/assets/`,
			},
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-theme-cornflower",
			options: {
				useDefaultLayout: true,
			},
		},
		{
			resolve: "@tate-media/gatsby-plugin-i18n",
			options: {
				...i18nConfig,
				siteUrl: "https://www.gs.pri.ee/",
			},
		},
	],
	siteMetadata: {
		title: "Griffeni blogi",
	},
};

export default config;
