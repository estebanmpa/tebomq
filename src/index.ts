import App from "./App";
import Config from "./config/Config";
import iocContainer from "./config/inversify.config";

const listenPort = Config.getInstance().getListenPort();
const mongoDbConnectionString = Config.getInstance().getMongoConnectionString();
const app = new App({ listenPort, iocContainer, mongoDbConnectionString });
app.initialize();
app.listen();
