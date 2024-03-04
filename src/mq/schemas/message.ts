import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            unique: true,
            required: true
        },
        appId: {
            type: mongoose.Schema.Types.String,
            required: true
        },
        createdAt: {
            type: mongoose.Schema.Types.Date,
            default: Date.now
        },
        status: {
            type: mongoose.Schema.Types.String,
            enum: ['Pending'],
            default: "Pending"
        },
        request: {
            target: {
                type: mongoose.Schema.Types.String,
                required: true
            },
            data: {
                type: Object,
                required: false
            }
        }
    }, { versionKey: false }
)

export const MessageModel = mongoose.model('Message', messageSchema);