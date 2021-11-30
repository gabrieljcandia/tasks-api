## Commands

`npm run dev` starts the application in development mode using `nodemon` and `ts-node` to do cold reloading.

`npm run build` builds the app at build directory, cleaning the folder first.

`npm run prod` starts the application in production mode by first building the project
with `npm run build`, and then executing the compiled JS code at `build/index.js`