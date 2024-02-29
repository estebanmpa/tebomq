import express from 'express';
import "reflect-metadata";
import { InversifyExpressServer } from 'inversify-express-utils';


class App {
    private app: express.Application;
    private server: InversifyExpressServer;
    private listenPort: number;
    private container: any;

    constructor(listenPort: number, container: any) {
        this.listenPort = listenPort;
        this.container = container;
    }

    public initialize() {
        this.initializeExpress();
        this.initializeInversifyExpressServer();
    }

    public listen() {
        this.server
            .build()
            .listen(this.listenPort);
        console.log(`App listening on port ${this.listenPort}`)
    }

    private initializeExpress() {
        this.app = express();
    }

    private initializeInversifyExpressServer() {
        this.server = new InversifyExpressServer(this.container, null, { rootPath: "/api" }, this.app);
    }
}

export default App;