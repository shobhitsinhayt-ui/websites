import type { NextConfig } from "next";

const securityHeaders = [
  // Stop the site being framed (clickjacking protection)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Don't let browsers MIME-sniff responses
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send only the origin on cross-origin navigations
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Lock down powerful features the site doesn't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
