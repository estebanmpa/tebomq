"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const Config_1 = __importDefault(require("./config/Config"));
const listenPort = Config_1.default.getInstance().getListenPort();
const controllers = [];
const app = new App_1.default(controllers, listenPort);
app.initialize();
//# sourceMappingURL=server.js.map