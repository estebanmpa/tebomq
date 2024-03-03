import express from 'express';
import "reflect-metadata";
import { InversifyExpressServer } from 'inversify-express-utils';
import { MongoDbConnection } from './database/MongoDbConection';
import { notFoundHandler } from './common/middlewares/notFoundHandler';
import { errorHandler } from './common/middlewares/errorHandler';


class App {
    private app: express.Application;
    private server: InversifyExpressServer;
    private listenPort: number;
    private container: any;
    private connectionString: string;

    constructor(listenPort: number, container: any, connectionString: string) {
        this.listenPort = listenPort;
        this.container = container;
        this.connectionString = connectionString;
    }

    public initialize() {
        this.initializeExpress();
        this.initializeInversifyExpressServer();
        this.initializeMongo();
        this.initializeErrorMiddleware();
    }

    public listen() {
        this.server
            .build()
            .listen(this.listenPort);
        console.log(`App listening on port ${this.listenPort}`)
    }

    private initializeExpress() {
        this.app = express();
        this.app.use(express.json());
    }

    private initializeInversifyExpressServer() {
        this.server = new InversifyExpressServer(this.container, null, { rootPath: "/api" }, this.app);
    }

    private async initializeMongo() {
        await new MongoDbConnection(this.connectionString).connect();
    }

    private initializeErrorMiddleware() {
        //this.app.use(errorHandler);
    }
}

export default App;