import { Routes } from "@angular/router";
import { LoginComponent } from "../account/login/login.component";
import { AppComponent } from "../app.component";
import { DashboardComponent } from "../common/dashboard/dashboard.component";
import { TicketComponent } from "../helpdesk/ticket/ticket.component";
import { RegistrationComponent } from "../users/registration/registration.component";
import { RequestComponent } from '../travelrequest/requests/request.component';
import { ViewrequestComponent } from '../travelrequest/requests/viewrequest/viewrequest.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'helpdesk/creation', component: TicketComponent },
    { path: 'home/dashboard', component: DashboardComponent },
    { path: 'home', component: AppComponent},
    { path: 'users/registration', component: RegistrationComponent},
    { path: 'travelrequest/request', component: RequestComponent},
    { path: 'travelrequest/viewrequest', component: ViewrequestComponent}
];