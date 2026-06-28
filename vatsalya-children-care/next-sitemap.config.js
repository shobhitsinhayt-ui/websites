/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vatsalyachildrencare.in",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    // AEO strategy: explicitly welcome AI crawlers so the clinic can be cited
    // by ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude.
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    additionalSitemaps: [],
  },
};
