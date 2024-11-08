import { Injectable } from '@angular/core';
import { StateService } from '../../../../../AngularCommon/common/projects/common/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService extends StateService {

  constructor() { 
    super();
  }
}
