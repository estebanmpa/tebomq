import express from 'express';


class App {
    private app: express.Application;
    private controllers: any[];
    private listenPort: number;

    constructor(controllers: any[], listenPort: number) {
        this.controllers = controllers;
        this.listenPort = listenPort;
    }

    public initialize() {
        this.initializeExpress();
        this.initializeControllers(this.controllers);
        this.listen();
    }

    private listen() {
        this.app.listen(this.listenPort, () => {
            console.log(`App listening on port ${this.listenPort}`)
        })
    }

    private initializeExpress() {
        this.app = express();
    }

    private initializeControllers(controllers: any[]) {
        controllers.forEach(controller => {
            this.app.use('/api', controller.router)
        })
    }
}

export default App;