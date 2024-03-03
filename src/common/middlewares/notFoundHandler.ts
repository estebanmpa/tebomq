import { Request, Response, NextFunction } from "express";
import NotFoundException from "../exceptions/NotFoundException";

export const notFoundHandler = (request: Request, response: Response, next: NextFunction) => {
    throw new NotFoundException();
};