import { EntityMetaData, FieldType } from "@esaf-platform-client/fwk-core";
import { Entity } from "../../common/models/entity";

export class SubCategoryM extends Entity {
    SubCategoryId: number;
    CategoryId?: number;
    SubCategoryName: string;
    Description: string;
    Status: number;
    UniqueId: string;

    constructor() {
        super();
        this.SubCategoryId = 0;
        this.SubCategoryName = '';
        this.Description = '';
        this.Status = 1;
        this.UniqueId = '';
        this.EntityMetaData = [];
    }
}
