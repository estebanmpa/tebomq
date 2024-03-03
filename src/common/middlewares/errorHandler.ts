import { Request, Response, NextFunction } from "express";
import { GeneralException } from "../exceptions/GeneralException";

interface IResponseException {
    customCode: number;
    status: string;
    message: string;
}

const generalErrorMessage = "It's not you. It's us. We are having some problems.";

export const errorHandler = (error: GeneralException, request: Request, response: Response, next: NextFunction) => {
    const code = !error.httpCode ? 500 : error.httpCode;
    const responseException: IResponseException = {
        customCode: error.customCode,
        message: !error.message ? generalErrorMessage : error.message,
        status: 'error'
    }

    response.status(code).send(responseException);
};