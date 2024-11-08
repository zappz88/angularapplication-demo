import { Routes } from '@angular/router';
import { 
    LoginComponent, 
    RegistrationComponent, 
    ErrorComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    HomeComponent,
    WebApplicationCardComponent
} from '../../../AngularCommon/common/projects/common/src/public-api';
import { AppComponent } from './app.component';
import { AuthguardService } from '../../../AngularCommon/common/projects/common/src/public-api';
import { AuthguardLoginService } from '../../../AngularCommon/common/projects/common/src/public-api';

export const routes: Routes = 
[
    { path: '', component: LoginComponent, canActivate: [AuthguardLoginService] },
    { path: 'login', component: LoginComponent, canActivate: [AuthguardLoginService] },
    { path: 'registration', component: RegistrationComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthguardService] },
    { path: 'webapplicationcard', component: WebApplicationCardComponent },
    { path: 'about', component: AboutComponent, canActivate: [AuthguardService] },
    { path: 'contact', component: ContactComponent, canActivate: [AuthguardService] },
    { path: '**', component: ErrorComponent, pathMatch: 'full' }
];
