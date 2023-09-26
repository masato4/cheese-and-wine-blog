export const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
