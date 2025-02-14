/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Changed to export for static generation
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true, // Added for better static hosting compatibility
}

module.exports = nextConfig

