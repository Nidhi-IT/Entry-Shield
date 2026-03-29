import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      thresholds: { lines: 90, functions: 90, branches: 90, statements: 90 },
      exclude: [
        'node_modules/',
        'src/setupTests.js',
        'src/main.jsx',      // <-- Exclude this!
        'src/index.css',     // <-- Exclude CSS
        '**/*.d.ts',
        'eslint.config.js',
        'vite.config.js'
      ]
    }
  }
})