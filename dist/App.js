"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const MongoDbConection_1 = require("./database/MongoDbConection");
class App {
    constructor(listenPort, container, connectionString) {
        this.listenPort = listenPort;
        this.container = container;
        this.connectionString = connectionString;
    }
    initialize() {
        this.initializeExpress();
        this.initializeInversifyExpressServer();
        this.initializeMongo();
        this.initializeErrorMiddleware();
    }
    listen() {
        this.server
            .build()
            .listen(this.listenPort);
        console.log(`App listening on port ${this.listenPort}`);
    }
    initializeExpress() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
    }
    initializeInversifyExpressServer() {
        this.server = new inversify_express_utils_1.InversifyExpressServer(this.container, null, { rootPath: "/api" }, this.app);
    }
    initializeMongo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new MongoDbConection_1.MongoDbConnection(this.connectionString).connect();
        });
    }
    initializeErrorMiddleware() {
        //this.app.use(errorHandler);
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map