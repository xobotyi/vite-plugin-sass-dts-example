import react from '@vitejs/plugin-react';
import path from 'node:path';
import url from 'node:url';
import { defineConfig } from 'vite';
import sassDts from 'vite-plugin-sass-dts';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    react(),
    sassDts({
      enabledMode: ['development', 'production'],
      global: {
        generate: true,
        outFile: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), './src/style.d.ts'),
      },
    }),
  ],
});
