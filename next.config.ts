import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    cacheComponents: true,
    cacheLife: {
        seconds: {
            stale: 0,
            revalidate: 10,
            expire: 10,
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
                search: '',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;