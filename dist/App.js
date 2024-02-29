"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
class App {
    constructor(listenPort, container) {
        this.listenPort = listenPort;
        this.container = container;
    }
    initialize() {
        this.initializeExpress();
        this.initializeInversifyExpressServer();
    }
    listen() {
        this.server
            .build()
            .listen(this.listenPort);
        console.log(`App listening on port ${this.listenPort}`);
    }
    initializeExpress() {
        this.app = (0, express_1.default)();
    }
    initializeInversifyExpressServer() {
        this.server = new inversify_express_utils_1.InversifyExpressServer(this.container, null, { rootPath: "/api" }, this.app);
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map