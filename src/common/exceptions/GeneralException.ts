export interface IGeneralException {
    httpCode: number
    message: string
    customCode: number;
}


export class GeneralException extends Error implements IGeneralException {
    public httpCode: number
    public message: string
    public customCode: number;
    constructor(httpCode: number, message: string, customCode: number = null) {
        super(message);
        this.name = this.constructor.name;
        this.httpCode = httpCode;
        this.message = message
        this.customCode = customCode;
    }
}