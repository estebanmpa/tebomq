import { injectable } from "inversify";

@injectable()
export default class CreateMessageUseCase {
    public async handle(message: any): Promise<any> {
        return {}
    }
}