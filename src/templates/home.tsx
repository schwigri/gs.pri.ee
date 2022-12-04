import { GitHubIcon, MastodonIcon, Seo } from "../components";
import {
	Sidebar,
	SidebarLayout,
	sidebarLayoutContent,
} from "gatsby-theme-cornflower";
import type { PageProps } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styles from "../styles/templates/home.css";
import { useIntl } from "react-intl";

const HomeTemplate: React.FC<PageProps> = () => {
	const intl = useIntl();

	return (
		<>
			<Seo />

			<SidebarLayout>
				<Sidebar>
					<div className={styles.homeSidebar}>
						<div className={styles.homeSidebarProfileWrapper}>
							<StaticImage
								alt={"Griffen Schwiesow"}
								className={styles.homeSidebarImage}
								src={"../assets/profile.jpg"}
								width={352}
							/>
						</div>

						<div>
							<p>{intl.formatMessage({ id: "bio" })}</p>
							<ul className={styles.homeSidebarIcons}>
								<li className={styles.homeSidebarIconsItem}>
									<a href={"https://github.com/schwigri"}>
										<GitHubIcon className={styles.homeSidebarIcon} />
									</a>
								</li>

								<li className={styles.homeSidebarIconsItem}>
									<a href={"https://mastodon.ee/@griffen"} rel={"me"}>
										<MastodonIcon className={styles.homeSidebarIcon} />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</Sidebar>

				<div className={sidebarLayoutContent}>
					<h2>{intl.formatMessage({ id: "noPostsHeading" })}</h2>
					<p>{intl.formatMessage({ id: "noPostsSubheading" })}</p>
				</div>
			</SidebarLayout>
		</>
	);
};

export default HomeTemplate;
