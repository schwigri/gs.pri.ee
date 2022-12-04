import type { GatsbyNode } from "gatsby";
import type { I18nContextValues } from "@tate-media/gatsby-plugin-i18n";
import { config } from "./src/constants/i18n";
import path from "path";

const getSlug = (
	locale: { locale: string; prefix: string },
	type: string,
	uid?: string
) => {
	const prefix =
		locale.locale === config.defaultLocale ? "/" : `/${locale.prefix}/`;

	switch (type) {
		case "home":
			return prefix;

		default:
			return `${prefix}${uid}`;
	}
};

export const createPages: GatsbyNode["createPages"] = ({ actions }) => {
	const { createPage } = actions;

	const homeTranslations = config.locales.map((locale) => ({
		locale: locale.locale,
		path: getSlug(locale, "home"),
	}));

	const homes = config.locales.map((locale) => {
		const slug = getSlug(locale, "home");

		const context: I18nContextValues = {
			locale: locale.locale,
			prefix: locale.prefix,
			translations: homeTranslations.filter((t) => t.locale !== locale.locale),
		};

		return {
			context,
			component: path.resolve("./src/templates/home.tsx"),
			path: slug,
		};
	});

	homes.forEach((home) => {
		createPage(home);
	});
};
