import { EntityMetaData, FieldType } from "@esaf-platform-client/fwk-core";
import { Entity } from "../../common/models/entity";

export class DepartmentM extends Entity {
    DepartmentId: number;
    DepartmentName: string;
    Description: string;
    Status: number;
    UniqueId: string;

    constructor() {
        super();
        this.DepartmentId = 0;
        this.DepartmentName = '';
        this.Description = '';
        this.Status = 1;
        this.UniqueId = '';
        this.EntityMetaData = [];
    }
}
