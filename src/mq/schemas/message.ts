import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
    {
        _id: { type: String },
        appId: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        status: { type: String, enum: ['Pending',] },
        request: {
            target: { type: String, required: true },
            data: { type: Object, required: false }
        }
    }
)

export const MessageModel = mongoose.model('Message', messageSchema);