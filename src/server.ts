import express, {Express} from 'express';
import cors from 'cors';
import TaskController from './controllers/TaskController';
import {handleErrors} from "./middlewares/errors/handleErrors";
import {editOneTaskValidation, getTasksValidation} from "./middlewares/validations/TaskValidation";
import {Server} from "http";

const configure = (): Express => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get('/tasks', ...getTasksValidation(), TaskController.getByAmount);

    app.put('/tasks', ...editOneTaskValidation(), TaskController.editOne);

    app.use(handleErrors);

    return app;
}

export const app = configure();

export const start = (): Server => {
    return app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    })

};