# How to Start?
1. Install dependencies:
`npm install`
2. Run the dev server:
`npm run dev`
3. Open `http://localhost:8080/` in the browser
4. Check into `source/index.js` and `source/html/index.html`

## Bundle all dependencies and publish website
1. Make sure `npm install` run at least once
2. Compile all dependencies: `./node_modules/.bin/webpack -d`
3. All files are in the folder `/public/`
