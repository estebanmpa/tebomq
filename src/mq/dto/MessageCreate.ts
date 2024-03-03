import { Type } from "class-transformer";
import { ValidateNested, IsString, IsObject, IsNotEmpty, IsOptional } from "class-validator";

class Request {
    @IsString()
    @IsNotEmpty()
    target: string;

    @IsObject()
    @IsOptional()
    data: object;
}

export class MessageCreate {
    @IsString()
    @IsNotEmpty()
    appId: number;

    @ValidateNested()
    @Type(() => Request)
    request: Request;
}