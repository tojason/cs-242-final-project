# How to Start?
1. Install all dependencies:
`npm install`
2. Start Webpack Development Server:
`npm run dev`
3. Open `http://localhost:8080/` in the browser
4. Check into `source/index.js` and `source/html/index.html`

## Available Script
1. `npm run dev` run webpack server
2. `npm run start` run express server
3. `npm run build` build application into production file

## Bundle all dependencies and publish website
1. Make sure `npm install` run at least once
2. Compile all dependencies: `./node_modules/.bin/webpack -d`
3. All files are in the folder `/public/`
