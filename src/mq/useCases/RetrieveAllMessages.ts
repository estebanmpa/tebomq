import { injectable } from "inversify";

@injectable()
export class RetrieveAllMessagesUseCase {
    constructor() { }

    public async handle(): Promise<any[]> {
        return []
    }
}