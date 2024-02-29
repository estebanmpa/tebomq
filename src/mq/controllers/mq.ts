import express from "express";
import { inject, injectable } from "inversify";
import { RetrieveAllMessagesUseCase } from "../useCases/RetrieveAllMessages";
import { controller, httpGet, httpPost } from "inversify-express-utils";
import CreateMessageUseCase from "../useCases/CreateMessage";

@controller('/mq')
export class MQController {
    constructor(@inject(RetrieveAllMessagesUseCase) private readonly retrieveAllUseCase: RetrieveAllMessagesUseCase,
        @inject(CreateMessageUseCase) private readonly createMessageUseCase: CreateMessageUseCase) { }

    @httpGet('/')
    public async retrieve(request: express.Request, response: express.Response, next: express.NextFunction) {
        try {
            response.send(await this.retrieveAllUseCase.handle());
        } catch (error) {
            next(error);
        }
    }

    @httpPost('/')
    public async create(request: express.Request, response: express.Response, next: express.NextFunction) {
        try {
            response.send(await this.createMessageUseCase.handle({}))
        } catch (error) {
            next(error);
        }
    }
}