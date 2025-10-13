export type Route = {
  name: string;
  route: string;
};

export const topbarRoutes: Route[] = [
  { name: "دموی برنامه", route: process.env.DEMO_APP_URL || "/" },
  // { name: "درباره ما", route: "/" },
  // { name: "تماس با ما", route: "/" },
];

export const footerRoutes: Route[] = [
  // { name: "درباره ما", route: "/about" },
  // { name: "تماس با ما", route: "/contact-us" },
];
