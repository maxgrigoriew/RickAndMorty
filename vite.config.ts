import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader'
export default defineConfig({
    plugins: [ vue(), svgLoader() ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
        port: 7777
    },
})
