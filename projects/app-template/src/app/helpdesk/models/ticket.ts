import { Entity, IEntity } from "../../common/models/entity";
import { EntityMetaData, FieldType } from "@esaf-platform-client/fwk-core";

export class TicketM extends Entity implements IEntity {
    TicketId: number;
    EmailId: string;
    BranchId: number;
    CategoryId: number;
    SubCategoryId: number;
    DepartmentId: number;
    FindingsId?: number;
    Status: number;
    Description: string;
    TicketDate: Date;
    IsActive: boolean;
    constructor() {
        super();
        this.TicketId = 0;
        this.BranchId = 0;
        this.DepartmentId = 0;
        this.CategoryId = 0;
        this.SubCategoryId = 0;
        this.FindingsId = undefined;
        this.Status = 1;
        this.Description = '';
        this.IsActive = true;
        this.EntityMetaData = [
            { FieldName: 'BranchId', FieldType: FieldType.Key, IsMandatory: true, ValidationMessage: 'Branch is required' },
            { FieldName: 'EmailId', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Email is required' },
            { FieldName: 'TicketDate', FieldType: FieldType.Date, IsMandatory: true, ValidationMessage: 'Ticket date is required' },
        ];
    }
}
