import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/cp.js'],
            publicDirectory: 'dist',
            buildDirectory: 'build',
            hotFile: 'dist/hot',
        }),
        vue(),
    ],
    build: {
        outDir: 'dist/build',
        emptyOutDir: true,
        manifest: 'manifest.json',
        rollupOptions: {
            external: ['vue'],
            output: {
                format: 'iife',
                globals: {
                    vue: 'Vue',
                },
                entryFileNames: 'assets/cp.js',
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
    },
});
