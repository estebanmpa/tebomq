import App from './App';
import Config from './config/Config';

const listenPort = Config.getInstance().getListenPort();
const controllers = [];
const app = new App(controllers, listenPort);
app.initialize();
