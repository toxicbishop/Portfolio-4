import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    useTypeScriptCli: true,
  },
  images: {
    qualities: [75, 100],
  },
}

export default nextConfig