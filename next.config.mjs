/** @type {import('next').NextConfig} */

// config images because of those images that are external ../
const nextConfig = {
    images: {
        domains: ['plus.unsplash.com']
        // for more domains just add , comma like  ['plus.unsplash.com','unicorn.com']
    }
};

export default nextConfig;
