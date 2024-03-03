import { Container } from "inversify";
import { RetrieveAllMessagesUseCase, CreateMessageUseCase } from "../mq/useCases";
import { MQController } from "../mq/controllers/mq";
import { MessageRepository } from "../mq/repository/MessageRepository";


let container: Container = new Container();

// Controllers
container.bind<MQController>(MQController).toSelf();

// Use cases
container.bind<RetrieveAllMessagesUseCase>(RetrieveAllMessagesUseCase).toSelf();
container.bind<CreateMessageUseCase>(CreateMessageUseCase).toSelf();

// Repositories
container.bind<MessageRepository>(MessageRepository).toSelf();

export default container;