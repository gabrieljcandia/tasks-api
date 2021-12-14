import {NextFunction, Request, Response} from "express";
import {getTitles} from "../services/loremApi";
import {v4 as uuidv4} from 'uuid';
import {GetTasks, EditTask} from "../types/requests/TaskRequests";
import {Task} from "../models/Task";
import {logger} from '../utils/logger';

const getByAmount = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const getTasks: GetTasks = parseGetTasks(req.query);
        const quantity = getTasks.quantity;

        const storedTasks = await Task.count();
        if(storedTasks < quantity){
            const tasksMissing = quantity - storedTasks;
            await addNewTasks(tasksMissing);
        }

        const response = await Task.findAll({
            limit: quantity,
            order: [['id', 'ASC']]
        });

        res.json(response);
    } catch(e){
        next();
    }
}

const addNewTasks = async (quantity: number) => {
    const lorems: string[] = await getTitles({quantity});
    const updatePromises = lorems.map(async (lorem) => {
        return await Task.create({
            uuid: uuidv4(),
            title: lorem,
            completed: false
        })
    });
    return Promise.all(updatePromises);
}

const parseGetTasks = (query: any): GetTasks => {
    const quantity = parseInt(query.quantity);
    return {quantity};
}

const editOne = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const editTask: EditTask = req.body;
        logger.info(JSON.stringify(editTask));
        await Task.update({...editTask}, {
            where: {
                uuid: editTask.uuid
            }
        });
        res.json(editTask);
    } catch(e){
        next();
    }
}

export default {
    getByAmount,
    editOne
}