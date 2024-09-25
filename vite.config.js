import { defineConfig } from 'vite';

export default defineConfig({
  // ... existing config ...
  optimizeDeps: {
    exclude: [
      'chunk-V7BFJD42.js',
      'chunk-3LYTE25H.js',
      'chunk-UNVBID36.js',
      'chunk-XK6SXR2N.js',
      'chunk-ORIFUXL7.js'
    ]
  }
});