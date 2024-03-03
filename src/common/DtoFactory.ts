import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import BadRequestException from "./exceptions/BadRequestException";

export class DtoFactory<T> {
    private entityClass: new () => T;

    constructor(entityClass: new () => T) {
        this.entityClass = entityClass;
    }

    async createInstance(data: any): Promise<T> {
        const dto: T = plainToInstance(this.entityClass, data);
        const validationErrors = await validate(dto as object);

        if (validationErrors?.length > 0) {
            throw new BadRequestException()
        }

        return dto;
    }
}