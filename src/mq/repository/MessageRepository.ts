import { injectable } from "inversify";
import { MessageModel } from "../schemas";
import { MessageCreate } from "../dto/MessageCreate";

@injectable()
export class MessageRepository {
    constructor() { }

    public async retrieve(): Promise<any[]> {
        return await MessageModel.find().exec();
    }

    public async create(message: MessageCreate): Promise<any> {
        try {
            const newMessage = new MessageModel(message);
            await newMessage.save();
            return newMessage.toObject({ versionKey: false });
        } catch (error) {
            throw error;
        }
    }
}