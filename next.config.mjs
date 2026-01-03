/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode
    reactStrictMode: true,

    // Static export for Cloudflare Pages
    output: 'export',

    // Disable image optimization for static export
    images: {
        unoptimized: true,
    },

    // Trailing slash for better static hosting compatibility
    trailingSlash: true,
};

export default nextConfig;

