import express from "express";
import { inject } from "inversify";
import { RetrieveAllMessagesUseCase } from "../useCases/RetrieveAllMessages";
import { controller, httpGet, httpPost } from "inversify-express-utils";
import { CreateMessageUseCase } from "../useCases";
import { DtoFactory } from "../../common/DtoFactory";
import { MessageCreate } from "../dto/MessageCreate";


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
            const { body } = request;
            const dto = await (new DtoFactory(MessageCreate).createInstance(body));
            response.send(await this.createMessageUseCase.handle(dto))
        } catch (error) {
            next(error);
        }
    }
}