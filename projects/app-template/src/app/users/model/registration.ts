import { Entity, IEntity } from "../../common/models/entity";
import { EntityMetaData, FieldType } from "@esaf-platform-client/fwk-core";

export class Users extends Entity implements IEntity {
    Name: string;
    EmployeeCode: string;
    Entity: string;
    Designation: string;
    DOB: Date;
    Email: string;
    MobileNumber: string;
    Username: string;
    Password: string;
    AdharNumber: string;
    AdharUpload: string;
    OtherDoc: string;
    constructor() {
        super();
        this.Name = '';
        this.EmployeeCode = '';
        this.Entity = '';
        this.Designation = '';
        this.DOB = new Date();
        this.Email = '';
        this.MobileNumber = '';
        this.Username = '';
        this.Password = '';
        this.AdharNumber='';
        this.AdharUpload='';
        this.OtherDoc='';
        this.EntityMetaData = [
            { FieldName: 'Name', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Name is required' },
            { FieldName: 'EmployeeCode', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Employee Code is required' },
            { FieldName: 'Entity', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Entity is required' },
            { FieldName: 'Designation', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Designation is required' },
            { FieldName: 'DOB', FieldType: FieldType.Date, IsMandatory: true, ValidationMessage: 'Date of Birth is required' },
            { FieldName: 'Email', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Email is required' },
            { FieldName: 'MobileNumber', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Mobile Number is required' },
            { FieldName: 'Username', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Username is required' },
            { FieldName: 'Password', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Password is required' },
        ];
    }
}
