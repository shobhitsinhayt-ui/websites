// src/lib/analytics.ts
// Google Tag Manager container ID. Public value (appears in page source),
// so it is safe to keep in the repo. An env var overrides it if ever needed.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-KM24DW5P";

// GA4 Measurement ID is configured INSIDE GTM (not loaded here) to avoid
// double-counting: G-E2XDWDLRY1
