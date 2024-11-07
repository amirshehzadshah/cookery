/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
