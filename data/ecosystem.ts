/* eslint-disable sonarjs/no-duplicate-string */
import type { Network } from "../src/models/company";

import type { Tag } from "./tag";

export interface SocialMetrics {
  date: number;
  socialActivity: number;
  tweetWithStarknet: number;
  twitterCount: number;
  twitterFollower: number;
}

export interface Project {
  id: string;
  name: string;
  shortName: string;
  description: string;
  tags: string[];
  image: string;
  network: Network;
  isLive: boolean;
  isTestnetLive: boolean;
  token?: string;
  technologies?: any;
  socialMetrics?: SocialMetrics;
}

export interface ProjectItf extends Project {
  tagsRef: Tag[];
}

export const allProjects: Array<Project> = [
  {
    id: "9bc2502d-3eba-4aaa-b585-b308fa0d57c2",
    name: "Reddio",
    shortName: "Reddio",
    description:
      "Reddio is a technology company that builds infrastructure for the blockchain, to help developers adopt blockchain technologies with the world’s first easy-to-use Layer 2 zkRollup Agnostic APIs. Enabling developers embed Token or NFT (Non-fungible token) into their web, desktop and mobile applications with massive scalability and zero gas fee for off-chain. Reddio has partnered with the leading layer 2 zkRollup provider Starkware to launch StarkEx APIs, with which you can have instant trading confirmation within second, high concurrent transactions up to 10k TPS, 0 gas fee as it’s done on layer 2 and the asset security derived from layer 1 Ethereum. Reddio is dedicated to Starknet ecosystem to build reference implementation on Cairo Smart Contrats. Reddio is backed by top VCs such as Paradigm and Arena Holdings.",
    tags: ["tools", "infrastructure", "nft", "starkex"],
    image: "reddio.png",
    network: {
      website: "https://www.reddio.com/",
      github: "https://github.com/reddio-com",
      twitter: "https://twitter.com/reddio_com",
      medium: "https://reddio.medium.com/",
      discord: "https://discord.com/invite/SjNAJ4qkK3",
      telegram: "https://t.me/Reddio_com",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    id: "bf58edd8-fb46-4066-9ed9-5bbaa683c1f5",
    name: "0xStarks",
    shortName: "Starks",
    description: "An NFT acting as Proof of OG on Starknet",
    tags: ["nft", "defi", "gamefi", "governance"],
    image: "0xStarks.png",
    network: {
      website: "",
      github: "",
      twitter: "https://twitter.com/Gen0_Stark",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    id: "cf99e8ee-00b7-4b59-afd7-4288ffe7a97b",
    name: "Pawaswap",
    shortName: "Pawaswap",
    description: "First DEX Aggregator LIVE on Starknet Mainnet",
    tags: ["defi", "infrastructure"],
    image: "0xPawa.png",
    network: {
      website: "https://pawaswap.com",
      github: "https://github.com/0xPawa",
      twitter: "https://twitter.com/0xPawa",
      medium: "",
      discord: "https://discord.gg/duPgjSvnGV",
      telegram: "https://t.me/pawaswap",
    },
    isLive: true,
    isTestnetLive: false,
  },
];
