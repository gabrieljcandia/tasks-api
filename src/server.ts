import express from 'express';
import FirstController from './controllers/FirstController';
import {handleErrors} from "./middlewares/errors/handleErrors";

export const start = () => {
    const app = express();

    app.use(express.json());

    app.get('/', FirstController.getOne);

    app.use(handleErrors);

    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    })

};