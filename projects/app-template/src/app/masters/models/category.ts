import { EntityMetaData, FieldType } from "@esaf-platform-client/fwk-core";
import { Entity } from "../../common/models/entity";

export class CategoryM extends Entity {
    CategoryId: number;
    CategoryName: string;
    Description: string;
    Status: number;
    UniqueId: string;

    constructor() {
        super();
        this.CategoryId = 0;
        this.CategoryName = '';
        this.Description = '';
        this.Status = 1;
        this.UniqueId = '';
        this.EntityMetaData = [];
    }
}
