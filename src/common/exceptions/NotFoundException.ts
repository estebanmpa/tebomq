import { GeneralException } from "./GeneralException";

class NotFoundException extends GeneralException {
    constructor() {
        super(404, 'Not Found');
    }
}

export default NotFoundException;