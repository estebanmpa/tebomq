"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor(controllers, listenPort) {
        this.controllers = controllers;
        this.listenPort = listenPort;
    }
    initialize() {
        this.app = (0, express_1.default)();
        this.initializeControllers(this.controllers);
        this.listen();
    }
    listen() {
        this.app.listen(this.listenPort, () => {
            console.log(`App listening on port ${this.listenPort}`);
        });
    }
    initializeExpress() {
        this.app = (0, express_1.default)();
    }
    initializeControllers(controllers) {
        controllers.forEach(controller => {
            this.app.use('/api', controller.router);
        });
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map