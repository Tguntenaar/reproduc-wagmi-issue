module.exports = async (phase, { defaultConfig }) => {
  const nextConfig = {
    ...defaultConfig,
    reactStrictMode: true,
    typescript: {
      tsconfigPath: './tsconfig.json',
    },
    images: {
      remotePatterns: [],
    },
  }
  return nextConfig
}
