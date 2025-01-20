import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  experimental: {
    // https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler
    // babel-plugin-react-compiler allows this
    reactCompiler: true
  }
  /* config options here */
};

export default withVanillaExtract(nextConfig);
