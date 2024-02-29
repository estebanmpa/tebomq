"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const Config_1 = __importDefault(require("./config/Config"));
const inversify_config_1 = __importDefault(require("./config/inversify.config"));
const listenPort = Config_1.default.getInstance().getListenPort();
const app = new App_1.default(listenPort, inversify_config_1.default);
app.initialize();
app.listen();
//# sourceMappingURL=server.js.map