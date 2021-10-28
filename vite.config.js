import { defineConfig } from 'vite';
const { resolve } = require('path');
import vue from '@vitejs/plugin-vue';
import eslint from '@rollup/plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslint({
            include: ['./src/**/*.vue', './src/**/*.js'],
            enforce: 'pre',
        }),
    ],
    build: {
        outDir: 'server/public',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                panel: resolve(__dirname, 'panel/index.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
