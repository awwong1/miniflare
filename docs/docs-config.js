module.exports = {
  product: "Miniflare",
  pathPrefix: "/",
  productIconKey: "docs-engine",
  contentRepo: "cloudflare/miniflare",
  contentRepoFolder: "../docs", // "../" removes "production/"
  externalLinks: [
    {
      title: "Workers home",
      url: "https://workers.cloudflare.com",
    },
    {
      title: "Workers docs",
      url: "https://developers.cloudflare.com/workers/",
    },
    {
      title: "GitHub",
      url: "https://github.com/cloudflare/miniflare",
    },
    {
      title: "Discord",
      url: "https://discord.gg/cloudflaredev",
    },
  ],
  search: {
    apiKey: "f0ffcd9dba78827de321d7fce21a8181",
    indexName: "miniflare",
    algoliaOptions: {},
  },
  siteMetadata: {
    title: "Miniflare",
    description:
      "Fun, full-featured, fully-local simulator for Cloudflare Workers",
    author: "@cloudflare",
    url: "https://miniflare.dev",
    // image: "http://developers.cloudflare.com/workers/og-image.png",
  },
};
