/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title:
    "Linera Ecosystem | Build on infrastructure with unprecedented scalability.",
  titleTemplate: "%s",
  defaultTitle:
    "Explore projects, teams, jobs, metrics and everything around Starknet Ecosystem",
  description:
    "Explore projects, teams, jobs, metrics and everything around Starknet Ecosystem",
  canonical: "https://starknet-ecosystem.com",
  openGraph: {
    url: "https://starknet-ecosystem.com",
    title: "Linera Ecosystem",
    description:
      "Explore projects, teams, jobs, metrics and everything around Starknet Ecosystem",
    images: [
      {
        url: "https://www.starknet-ecosystem.com/starknet-map.png",
        alt: "Linera Ecosystem logo",
      },
    ],
    site_name: "Linera Ecosystem",
  },
  twitter: {
    cardType: "summary_large_image",
    site: "@StarknetEco",
  },
};

export default defaultSEOConfig;
