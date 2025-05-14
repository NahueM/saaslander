// next.config.ts
import { NextConfig } from "next";
import withMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const mdxOptions = {
  extension: /\.mdx?$/,
};

const nextConfig: NextConfig = {
  // Para que Next.js reconozca páginas .mdx
  pageExtensions: ["ts", "tsx", "mdx"],
  // @ts-expect-error is experimental
  experimental: { appDir: true },
};

export default createNextIntlPlugin()(withMDX(mdxOptions)(nextConfig));
