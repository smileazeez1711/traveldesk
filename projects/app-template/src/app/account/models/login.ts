import { EntityMetaData, FieldType } from "@esaf-platform-client/fwk-core";
import { Entity } from "../../common/models/entity";

export class Login extends Entity {
    Username: string;
    Password: string;

    constructor() {
        super();
        this.Username = '';
        this.Password = '';
        this.EntityMetaData = [
            { FieldName: 'Username', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Username is required' },
            { FieldName: 'Password', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Password is required' },
        ];
    }
}
