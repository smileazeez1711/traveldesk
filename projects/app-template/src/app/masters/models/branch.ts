import { EntityMetaData, FieldType } from "@esaf-platform-client/fwk-core";
import { Entity } from "../../common/models/entity";

export class BranchM extends Entity {
    BranchId: number;
    BranchName: string;
    Description: string;
    Status: number;

    constructor() {
        super();
        this.BranchId = 0;
        this.BranchName = '';
        this.Description = '';
        this.Status = 1;
        this.EntityMetaData = [];
    }
}
