import { Helmet } from "react-helmet";
import React from "react";
import { useIntl } from "react-intl";

interface SeoProps {
	title?: string;
}

const Seo: React.FC<SeoProps> = (props) => {
	const { title } = props;
	const intl = useIntl();

	const siteTitle = intl.formatMessage({ id: "siteTitle" });
	const titleTemplate = intl.formatMessage(
		{ id: "titleTemplate" },
		{ siteTitle }
	);

	if (title) {
		return <Helmet title={title} titleTemplate={titleTemplate} />;
	} else {
		return <Helmet title={siteTitle} />;
	}
};

Seo.propTypes = {};

export { Seo };
