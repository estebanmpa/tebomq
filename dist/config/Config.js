"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    static getInstance() {
        if (!this.instance) {
            this.instance = new Config();
        }
        return this.instance;
    }
    getEnvironment() {
        return process.env.NODE_ENV.toUpperCase();
    }
    getListenPort() {
        return parseInt(process.env.LISTEN_PORT);
    }
    getMongoConnectionString() {
        return `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
    }
}
exports.default = Config;
//# sourceMappingURL=Config.js.map