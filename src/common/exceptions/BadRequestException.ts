import { GeneralException } from "./GeneralException";

class BadRequestException extends GeneralException {
    constructor() {
        super(400, 'Bad Request');
    }
}

export default BadRequestException;