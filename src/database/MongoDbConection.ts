import mongoose from "mongoose";


export class MongoDbConnection {
    private connectionString: string;

    constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    public async connect() {
        try {
            await mongoose.connect(this.connectionString);
        } catch (error) {
            throw (error);
        }
    }
}
