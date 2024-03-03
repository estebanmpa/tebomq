import App from './App';
import Config from './config/Config';
import container from './config/inversify.config';

const listenPort = Config.getInstance().getListenPort();
const connectionString = Config.getInstance().getMongoConnectionString();
const app = new App(listenPort, container, connectionString);
app.initialize();
app.listen();
