import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: "/nathanbridgetwedding",
	images: { unoptimized: true },
	output: "export",
	reactStrictMode: true,
};

export default nextConfig;
