import { inject, injectable } from "inversify";
import { MessageCreate } from "../dto/MessageCreate";
import { MessageRepository } from "../repository/MessageRepository";

@injectable()
export class CreateMessageUseCase {
    constructor(@inject(MessageRepository) private readonly messageRepository: MessageRepository) { }

    public async handle(message: MessageCreate) {
        try {
            return await this.messageRepository.create(message);
        } catch (error) {
            throw error;
        }
    }
}