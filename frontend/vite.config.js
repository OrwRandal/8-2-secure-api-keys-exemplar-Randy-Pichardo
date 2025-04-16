import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const SERVER_PORT = 8080;

// I set up this proxy so that when I'm running both the frontend and backend locally,
// any request from the frontend to an endpoint starting with /api will get forwarded to the backend on port 8080.
// Without this, the frontend would try to fetch from its own port (in this case, 5173), which wouldn’t reach the backend.

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${SERVER_PORT}`,
        changeOrigin: true,
      },
    },
  },
});