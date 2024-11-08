import { ApplicationConfig, inject, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppJsonConfigBase, externalRedirectInterceptor, WebApplicationJsonConfigBase } from '../../../AngularCommon/common/projects/common/src/public-api';
import { AppJsonConfig } from './model/appJsonConfig';
import { WebApplicationJsonConfig } from './model/webApplicationConfig';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideHttpClient(withInterceptors([externalRedirectInterceptor])), 
    provideAnimationsAsync(), 
    provideAnimationsAsync(),
    { provide: AppJsonConfigBase, useClass: AppJsonConfig },
    { provide: WebApplicationJsonConfigBase, useClass: WebApplicationJsonConfig }  
  ]
};
