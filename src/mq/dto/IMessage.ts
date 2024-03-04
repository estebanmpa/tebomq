import { Types } from "mongoose";

interface IRequest {
    target: string;
    data: Object;
}

export interface IMessage {
    _id: Types.ObjectId;
    appId: number;
    request: IRequest;
}