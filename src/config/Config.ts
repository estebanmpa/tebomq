

export default class Config {
    private static instance: Config;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new Config();
        }
        return this.instance;
    }

    public getEnvironment(): string {
        return process.env.NODE_ENV.toUpperCase();
    }

    public getListenPort(): number {
        return parseInt(process.env.LISTEN_PORT);
    }

    public getMongoConnectionString(): string {
        return `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`
    }
}