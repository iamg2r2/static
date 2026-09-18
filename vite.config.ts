import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path is set for GitHub Pages project sites (https://<user>.github.io/<repo>/).
// Change base to '/' if deploying to a custom domain or a user/org root site.
export default defineConfig({
  plugins: [react()],
  base: './',
})
