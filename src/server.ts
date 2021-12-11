import express from 'express';
import TaskController from './controllers/TaskController';
import {handleErrors} from "./middlewares/errors/handleErrors";

export const start = () => {
    const app = express();

    app.use(express.json());

    app.get('/tasks', TaskController.getByAmount);

    app.put('/tasks', TaskController.editOne);

    app.use(handleErrors);

    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    })

};