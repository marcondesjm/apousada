/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    optimizePackageImports: ["@coreui/react", "@coreui/coreui", "@mui/lab", "styled-components", "uuid"]
  }
};

module.exports = nextConfig;
