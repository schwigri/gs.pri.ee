import { en_US, et_EE, ru_RU } from "./strings";

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
		{
			locale: "ru-RU",
			localMessages: ru_RU,
			prefix: "ru",
			universalMessages: {
				localeCode: "RU",
				localeName: "Русский",
			},
		},
	],
};
