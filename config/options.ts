export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Innovo",
	description: "",
	navItems: [
    {
      label: "Login",
      href: "/login",
    },
	{
		label: "home-admin",
		href: "/home-admin",
	  },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Login",
			href: "/login",
		  },
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		docs: "https://nextui.org",
	},
};
