/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    LASTFM_USERNAME: process.env.LASTFM_USERNAME,
    DISCORD: process.env.DISCORD,
    TELEGRAM: process.env.TELEGRAM,
    GITHUB: process.env.GITHUB
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
