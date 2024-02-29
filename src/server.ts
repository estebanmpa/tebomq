import App from './App';
import Config from './config/Config';
import container from './config/inversify.config';

const listenPort = Config.getInstance().getListenPort();
const app = new App(listenPort, container);
app.initialize();
app.listen();
