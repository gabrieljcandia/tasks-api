import { validationResult } from 'express-validator';
import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';

export const validateResult = (req: Request, res: Response, next: () => void) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.mapped();
        return res.status(StatusCodes.BAD_REQUEST).json({
            status: 'error',
            message: errorMessages
        });
    }
    next();
};
