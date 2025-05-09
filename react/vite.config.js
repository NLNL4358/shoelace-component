import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            /* 절대경로를 사용할때의 기준을 '@/' 로 시작하면 'src/' 로 시작된다고 설정한다. */
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            {
                find: '@pages',
                replacement: path.resolve(__dirname, 'src/pages'),
            },
        ],
    },
});
