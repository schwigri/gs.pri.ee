import type { HeadFC as GatsbyHeadFC } from "gatsby";
import type { I18nContextValues } from "@tate-media/gatsby-plugin-i18n";

export interface HeadFC<DataType = never, PageContextType = I18nContextValues>
	extends GatsbyHeadFC<DataType, PageContextType> {
	propTypes?: React.WeakValidationMap<Record<string, unknown>>;
}
