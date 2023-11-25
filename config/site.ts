export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Innovo",
	description: "",
	navItems: [
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [,
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		docs: "https://nextui.org",
	},
};
