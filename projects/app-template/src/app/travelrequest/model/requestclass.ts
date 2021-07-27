import { Entity, IEntity } from "../../common/models/entity";
import { EntityMetaData, FieldType } from "@esaf-platform-client/fwk-core";

export class TravelRequests extends Entity implements IEntity {
    Category: string;
    TravelDate: Date;   
    ReturnDate: Date; 
    CheckInDate: Date;   
    CheckOutDate: Date;    
    Type: string;
    FlightType: string
    TrainType: string
    HotelType: string
    Origin?: string
    Destination?: string    
    PurposeofVisit: string
    Remarks?: string
    PreferableTimings: string
    PickupTime: Date
    City?: string
    Location?: string
    Landmark?: string
    SeatPreference: string
    MealPreference: string
    MenuPreference: string
    BirthPreference: string
    PreferredTrain?: string
    CabPreference: string
    WaitingReturn: boolean
    BedPreference: string
    RoomPreference: string
    PreferableRent: string
    TotalOccupancy: number
    Country?: string
    DurationofStay: string
    TicketDoc: string
    Details: string
    LastUpdatedBy?: number
    LastUpdatedOn: Date
    CreatedBy: number
    CreatedOn: Date
    Status: string
    IsActive: boolean
    constructor() {
        super();
        this.Status='';
        this.IsActive=true;
        this.DurationofStay='';
        this.LastUpdatedBy=undefined;
        //this.LastUpdatedOn= new Date();
        this.CreatedBy = 0;
        this.CreatedOn =  new Date();
        this.WaitingReturn=false;
        this.BedPreference='';
        this.RoomPreference='';
        this.PreferableRent = '';
        this.TotalOccupancy = 0;
        this.MealPreference='';
        this.MenuPreference='';
        this.BirthPreference='';
        this.PreferredTrain=undefined;
        this.Country = undefined;
        this.CabPreference = '';
        //this.PickupTime = new Date();
        this.City=undefined;
        this.Location=undefined;
        this.Landmark=undefined;
        this.SeatPreference = '';
        this.Category = '';       
        this.Type = '';
        this.FlightType='';
        this.TrainType='';
        this.TicketDoc='';
        this.Details='';
        this.HotelType='';
        this.Origin = undefined;
        this.Destination = undefined;
        this.PurposeofVisit='';
        this.Remarks=undefined;
        this.PreferableTimings='';
        this.EntityMetaData = [
            { FieldName: 'PurposeofVisit', FieldType: FieldType.String, IsMandatory: true, ValidationMessage: 'Purpose of Visit is required' },
            //{ FieldName: 'TravelDate', FieldType: FieldType.Date, IsMandatory: true, ValidationMessage: 'Travel Date is required' },            
        ];
    }
}
