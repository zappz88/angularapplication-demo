import { AngularMaterialModules } from '../../../AngularCommon/common/projects/common/src/public-api';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { 
  LoginComponent, 
  RegistrationComponent, 
  NavbarComponent, 
  WebApplicationCardComponent, 
  HomeComponent,
  StateService,
  AuthenticationService
} from '../../../AngularCommon/common/projects/common/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink, 
    RouterOutlet,
    ...AngularMaterialModules,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    WebApplicationCardComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angularapplication';
  
  constructor(
    private authenticationService: AuthenticationService,
    private stateService: StateService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.checkSession();
  }
  
  checkSession(){
    const session = this.authenticationService.getSession();
    if(session){
      this.stateService.setIsLoggedIn(session.isLoggedIn);
    }
    else{
      try{
        this.authenticationService.deleteSession();
      }
      catch(error){
        console.log(error);
      }
      this.router.navigate(['']);
    }
  }
}
