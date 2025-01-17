import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://idkaccount3737.github.io/project/",

  optimizeDeps: {
        exclude: ['lucide-react'],
  },
});
