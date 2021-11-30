import {Request, Response, NextFunction} from 'express';

const getOne = async (req: Request, res: Response, next: NextFunction) => {
    try{
        res.json(req.body);
    } catch (e){
        next();
    }
}

export default {
    getOne
}