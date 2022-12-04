import {
	Breakpoint,
	breakpoint,
} from "gatsby-theme-cornflower/src/styles/breakpoints";
import { style } from "@vanilla-extract/css";
import { theme } from "gatsby-theme-cornflower/src/styles/global.css";

export const homeSidebar = style({
	display: "flex",
	flexDirection: "column",
	gap: theme.global.spacing,
	"@media": {
		[breakpoint(Breakpoint.Small)]: {
			flexDirection: "row",
		},
		[breakpoint(Breakpoint.Large)]: {
			flexDirection: "column",
		},
	},
});

export const homeSidebarImage = style({
	borderRadius: "4px",
});

export const homeSidebarIcons = style({
	listStyle: "none",
	padding: 0,
});

export const homeSidebarIconsItem = style({
	display: "inline",
	margin: 0,
	marginInlineEnd: theme.global.spacingSmall,
});

export const homeSidebarIcon = style({
	fill: theme.colors.copy,
	height: theme.pixels[18],
	width: "auto",
});

export const homeSidebarProfileWrapper = style({
	minWidth: "185px",
});

export default {
	homeSidebar,
	homeSidebarIcon,
	homeSidebarIcons,
	homeSidebarIconsItem,
	homeSidebarImage,
	homeSidebarProfileWrapper,
};
