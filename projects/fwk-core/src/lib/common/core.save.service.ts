import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EntityMetaData } from '../model/generic/entity-metadata';
import { FieldType } from '../model/generic/enums';
import { Validation } from '../model/generic/validation';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CoreSaveService {

  constructor(private utils: UtilsService) { }
  validations: Array<Validation>;
  validationChange: Subject<Array<Validation>> = new Subject<Array<Validation>>();

  saveValidation(formData: any, fromBB: boolean = false): Array<Validation> {
    this.validations = [];
    let entityMetaData: Array<EntityMetaData> = formData.EntityMetaData;
    let metaData: EntityMetaData;
    if (entityMetaData && entityMetaData.length > 0) {
      for (let i = 0; i < entityMetaData.length; i++) {
        metaData = entityMetaData[i];
        if (metaData.IsMandatory) {
          let validation = this.validateMandatory(formData, metaData);
          if (!this.utils.isEmptyString(validation.FieldName)) {
            this.validations.push(validation);
          }
        }
      }
    }
    this.validationChange.next(this.validations);
    return this.validations;
  }

  validateMandatory(formData: any, metaData: EntityMetaData): Validation {
    let validation: Validation = {};
    switch (metaData.FieldType) {
      case FieldType.String:
        if (this.utils.isEmptyString(formData[metaData.FieldName])) {
          validation = {
            FieldName: metaData.FieldName,
            Message: !this.utils.isEmptyString(metaData.ValidationMessage) ? metaData.ValidationMessage?.toString() : '',
            Type: ''
          };
        }
        break;
      case FieldType.Key:
        if (!this.utils.isGreaterThanZero(formData[metaData.FieldName])) {
          validation = {
            FieldName: metaData.FieldName,
            Message: !this.utils.isEmptyString(metaData.ValidationMessage) ? metaData.ValidationMessage?.toString() : '',
            Type: ''
          };
        }
        break;  
      case FieldType.Date:
          if (!this.utils.isValidDate(formData[metaData.FieldName])) {
            validation = {
              FieldName: metaData.FieldName,
              Message: !this.utils.isEmptyString(metaData.ValidationMessage) ? metaData.ValidationMessage?.toString() : '',
              Type: ''
            };
          }
          break; 
      default:
        break;
    }
    return validation;
  }
}
