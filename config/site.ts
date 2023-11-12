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
		label: "Clientes",
		href: "/clientes",
	  },
	  {
		label: "trabajadores",
		href: "/trabajadores",
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
			label: "home-admin",
			href: "/home-admin",
		  },
		  {
			label: "Clientes",
			href: "/clientes",
		  },
		  {
			label: "trabajadores",
			href: "/trabajadores",
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
