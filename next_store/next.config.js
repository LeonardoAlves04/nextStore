/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["fsw-store.s3.sa-east-1.amazonaws.com", "imgur.com", "i.imgur.com", "ibb.co", "utfs.io"]
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig
