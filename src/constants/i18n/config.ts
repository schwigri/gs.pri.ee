import { en_US, et_EE } from "./strings";

export const config = {
	defaultLocale: "et-EE",
	locales: [
		{
			locale: "et-EE",
			localMessages: et_EE,
			prefix: "et",
			universalMessages: {
				localeCode: "ET",
				localeName: "Eesti",
			},
		},
		{
			locale: "en-US",
			localMessages: en_US,
			prefix: "en",
			universalMessages: {
				localeCode: "EN",
				localeName: "English",
			},
		},
	],
};
