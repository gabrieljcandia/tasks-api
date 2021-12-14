## Tasks API
Built with Node / Express / MySQL, this project serves an API for storing tasks fetched from a lorem API.

### Parameters
Parameters are configured using a `.env` file. You should make a copy of the [.env.example](.env.example) file,
which contains the default values, and name it `.env`. Then you can edit the parameters as needed.

### Run with docker-compose
This project is configured to run using docker-compose.

Open a terminal and type:

`docker build --tag api .` for creating an image of the project, then type

`docker-compose up` for setting up a MySQL database and starting the server after the database gets initialized.

Once the database is ready, a migration will be performed for creating the database schema. After that, the API
will be ready to handle requests.

### Commands
If you won't be using docker-compose to run the project, here are some useful commands.

`npm run migrate` runs the database migrations.

`npm run dev` starts the application in development mode using `nodemon` and `ts-node` to do cold reloading.

`npm run build` builds the app at build directory, cleaning the folder first.

`npm run prod` starts the application in production mode by first building the project
with `npm run build`, and then executing the compiled JS code at `build/index.js`