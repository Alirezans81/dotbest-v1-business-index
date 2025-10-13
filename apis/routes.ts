export const apiRoutes = () => {
  const app_mode = process.env.NEXT_PUBLIC_APP_MODE;
  const base_url =
    app_mode === "development"
      ? process.env.NEXT_PUBLIC_DEV_API_URL
      : process.env.NEXT_PUBLIC_PROD_API_URL;

  return {
    form: `${base_url}api/contact-request`,
  };
};
