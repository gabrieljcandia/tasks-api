import {NextFunction, Request, Response} from "express";
import {getTitles} from "../services/loremApi";
import {v4 as uuidv4} from 'uuid';
import {GetTasks, EditTask} from "../types/requests/TaskRequests";
import {StatusCodes} from "http-status-codes";
const logger = require('../utils/logger');

const getByAmount = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const getTasks: GetTasks = req.query as any;
        const quantity = getTasks.quantity;

        const lorems: any = await getTitles({quantity});
        const response = lorems.map((lorem: string) => {
            return {
                uuid: uuidv4(),
                title: lorem,
                completed: false
            }
        })

        res.json(response)
    } catch(e){
        next();
    }
}

const editOne = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const editTask: EditTask = req.body;
        logger.info(JSON.stringify(editTask));
        res.sendStatus(StatusCodes.OK);
    } catch(e){
        next();
    }
}

export default {
    getByAmount,
    editOne
}