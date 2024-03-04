import { injectable } from "inversify";
import { MessageCreate } from "../dto/MessageCreate";
import { IMessage } from "../dto/IMessage";
import { MessageModel } from "../schemas";
import mongoose from "mongoose";


@injectable()
export class MessageRepository {
    public async retrieve(): Promise<any[]> {
        return await MessageModel.find().exec();
    }

    public async create(message: MessageCreate): Promise<IMessage> {
        try {
            const newMessage = new MessageModel(message);
            newMessage._id = new mongoose.Types.ObjectId();
            await newMessage.save();
            return newMessage.toObject();
        } catch (error) {
            throw error;
        }
    }
}