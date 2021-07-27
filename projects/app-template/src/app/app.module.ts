import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './route/app-routing.module';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { AppLeftnavbarComponent } from './common/leftnavbar/leftnavbar.component';
import { LoginComponent } from './account/login/login.component'
import { ConfigService } from '@esaf-platform-client/fwk-core';
import { BuildingBlocksModule } from '@esaf-platform-client/building-blocks';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { TicketComponent } from './helpdesk/ticket/ticket.component';
import { TicketCreationComponent } from './helpdesk/ticket/ticket-creation/ticket-creation.component';
import { FormHeaderComponent } from './common/form-header/form-header.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { EsWindowComponent } from './helpdesk/es-window/es-window.component';
import { DropdownComponent } from './helpdesk/dropdown/dropdown.component';
import { BuildingBlock } from './helpdesk/building-block/building-block.component';
import { TextboxComponent } from './helpdesk/textbox/textbox.component';
import { ButtonComponent } from './helpdesk/button/button.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DatepickerComponent } from './helpdesk/datepicker/datepicker.component';
import { CheckboxComponent } from './helpdesk/checkbox/checkbox.component';
import { OptionComponent } from './helpdesk/option/option.component';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { DialogComponent } from './helpdesk/dialog/dialog.component';
import { LabelComponent } from './helpdesk/label/label.component';
import { GridComponent } from './helpdesk/grid/grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { TicketListComponent } from './helpdesk/ticket/ticket-list/ticket-list.component';
import { ContextMenuModule } from '@progress/kendo-angular-menu';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { RegistrationCreationComponent } from './users/registration/registration-creation/registration-creation.component';
import { RegistrationListComponent } from './users/registration/registration-list/registration-list.component';
import { RequestComponent } from './travelrequest/requests/request.component';
import { RequestListComponent } from './travelrequest/requests/request-list/request-list.component';
import { RequestCreateComponent } from './travelrequest/requests/request-create/request-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewrequestComponent } from './travelrequest/requests/viewrequest/viewrequest.component';
import { EditrequestComponent } from './travelrequest/requests/editrequest/editrequest.component';
import { RegistrationEditComponent } from './users/registration/registration-edit/registration-edit.component';
import { RegistrationViewComponent } from './users/registration/registration-view/registration-view.component';
import { RequestUpdateComponent } from './travelrequest/requests/request-update/request-update.component';




@NgModule({
  declarations: [
    HeaderComponent,
    AppLeftnavbarComponent,
    AppComponent,
    LoginComponent,
    TicketComponent,
    TicketCreationComponent,
    FormHeaderComponent,
    EsWindowComponent,
    DropdownComponent,
    BuildingBlock,
    TextboxComponent,
    ButtonComponent,
    DatepickerComponent,
    CheckboxComponent,
    OptionComponent,
    DialogComponent,
    LabelComponent,
    GridComponent,
    TicketListComponent,
    DashboardComponent,
    RegistrationComponent,
    RegistrationCreationComponent,
    RegistrationListComponent,
    RequestComponent,
    RequestListComponent,
    RequestCreateComponent,
    ViewrequestComponent,
    EditrequestComponent,
    RegistrationEditComponent,
    RegistrationViewComponent,
    RequestUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BuildingBlocksModule,
    TooltipModule,
    BrowserAnimationsModule,
    IndicatorsModule,
    DialogsModule,
    ButtonsModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
    DateInputsModule,
    NotificationModule,
    GridModule,
    ContextMenuModule,
    ChartsModule,
    NgbModule,
    //BrowserAnimationsModule,
    //AppLeftnavbarComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigService) => () => config.loadConfig(),
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
