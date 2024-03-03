import { inject, injectable } from "inversify";
import { MessageRepository } from "../repository/MessageRepository";


@injectable()
export class RetrieveAllMessagesUseCase {
    constructor(@inject(MessageRepository) private readonly messageRepository: MessageRepository) { }

    public async handle(): Promise<any[]> {
        return await this.messageRepository.retrieve();
    }
}