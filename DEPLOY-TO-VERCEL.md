# Deploy this website to Vercel

This is a React/Vite website. Its production build has been tested locally.

1. Extract the ZIP before uploading to GitHub. Vercel does not build an app stored inside a ZIP in your repository.
2. Upload the extracted files and folders to the repository: package.json, package-lock.json, index.html, vite.config.js, vercel.json, src, and public. Keep the folder contents intact.
3. In your Vercel project's Settings > Build and Deployment, set Root Directory to the folder containing package.json. If package.json is at the top of the repository, leave Root Directory empty. If it is under ultimate-boca-react-source, select that folder.
4. Use Framework Preset: Vite; Build Command: npm run build; Output Directory: dist. Leave Install Command at its default.
5. Save the settings and redeploy the production branch from the Deployments tab.
6. Open the production domain shown in Vercel. Use that public URL in your portfolio.

The included vercel.json explicitly selects Vite and dist. The Root Directory must still be selected correctly in Vercel; it cannot be set inside vercel.json.

Verification: npm run build succeeded and generated dist/index.html, the JavaScript/CSS bundles, and the supplied image assets. Live deployment settings and public availability still need verification.

Official reference: https://vercel.com/docs/frameworks/frontend/vite
