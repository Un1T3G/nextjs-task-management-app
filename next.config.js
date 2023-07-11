/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: false,
    },
  },
}

module.exports = nextConfig
