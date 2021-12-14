import {body, query} from 'express-validator';
import {validateResult} from "./utils";

export const getTasksValidation = () => {
    return [
        query('quantity')
            .isNumeric()
            .withMessage('quantity should be a number'),
        validateResult
    ]
}

export const editOneTaskValidation = () => {
    return [
        body('completed')
            .optional()
            .isBoolean()
            .withMessage('completed should be boolean'),
        body('uuid')
            .exists()
            .withMessage('uuid is required')
            .isString()
            .withMessage('uuid should be a string'),
        body('title')
            .optional()
            .isString()
            .withMessage('title should be a string'),
        validateResult
    ]
}
