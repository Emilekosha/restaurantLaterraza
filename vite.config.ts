import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/restaurantLaterraza/',
  optimizeDeps: {
    exclude: ['lucide-react'],
    // assetsInclude: ['**/*.MP4'],
  },
});
