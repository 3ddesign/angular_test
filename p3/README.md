Installation

npm install or yarn
Development (Client-side only rendering)

run npm run start which will start ng serve
Production (also for testing SSR/Pre-rendering locally)

npm run build:ssr && npm run serve:ssr - Compiles your application and spins up a Node Express to serve your Universal application on http://localhost:4000.

npm run build:prerender && npm run serve:prerender - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on http://localhost:8080 Note: To deploy your static site to a static hosting platform you will have to deploy the dist/browser folder, rather than the usual dist
