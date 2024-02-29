import express from "express";
import { inject, injectable } from "inversify";
import { RetrieveAllUseCase } from "../useCases/RetrieveAll";
import { controller, httpGet } from "inversify-express-utils";

@controller('/mq')
@injectable()
export class MQController {
    constructor(@inject(RetrieveAllUseCase) private readonly retrieveAllUseCase: RetrieveAllUseCase) { }

    @httpGet('/')
    public async retrieve(request: express.Request, response: express.Response, next: express.NextFunction) {
        try {
            response.send(this.retrieveAllUseCase.handle());
        } catch (error) {
            next(error);
        }
    }
}