import { EntityMetaData, FieldType } from "@esaf-platform-client/fwk-core";
import { Entity } from "../../common/models/entity";

export class FindingsM extends Entity {
    FindingsId: number;
    FindingsName: string;
    Description: string;
    Status: number;
    UniqueId: string;

    constructor() {
        super();
        this.FindingsId = 0;
        this.FindingsName = '';
        this.Description = '';
        this.Status = 1;
        this.UniqueId = '';
        this.EntityMetaData = [];
    }
}
