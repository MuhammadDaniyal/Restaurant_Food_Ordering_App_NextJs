/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    jsx: {
        // If you're using TypeScript:
        factory: 'react/jsx-runtime.tsx',
        // ...
    }
}

module.exports = nextConfig
