import { Http } from "../http-client";
import { HTTPDataHandler } from "../../../utils/formDataValidator";
export class UserTarget extends Http {
    connectivity = new Http().connect()
    userCreationDetection(object){
        return this.connectivity.post('/checkUser.php', HTTPDataHandler(object))
    }
}

