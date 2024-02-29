import { Container } from "inversify";
import { RetrieveAllUseCase } from "../mq/useCases/RetrieveAll";
import { MQController } from "../mq/controllers/mq";


let container: Container = new Container();
// Controllers
container.bind<MQController>(MQController).toSelf();

// Use cases
container.bind<RetrieveAllUseCase>(RetrieveAllUseCase).toSelf();


export default container;