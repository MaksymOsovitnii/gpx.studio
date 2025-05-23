import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
    ssr: {
        noExternal: ['gpx'],
    },
    plugins: [
        nodePolyfills({
            globals: {
                Buffer: true,
            },
        }),
        enhancedImages(),
        sveltekit(),
    ],
});
