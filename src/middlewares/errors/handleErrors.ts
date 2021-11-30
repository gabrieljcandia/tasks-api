import {Request, Response} from 'express';
import {StatusCodes} from "http-status-codes";

export const handleErrors = (req: Request, res: Response) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Server error'});
}