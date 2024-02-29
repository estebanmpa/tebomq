import { injectable } from "inversify";

@injectable()
export class RetrieveAllUseCase {
    constructor() { }

    public async handle(): Promise<any[]> {
        return []
    }
}