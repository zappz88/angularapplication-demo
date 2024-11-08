import { WebApplicationJsonConfigBase } from "../../../../AngularCommon/common/projects/common/src/public-api";
import appjson from '../web-applications.json';

export class WebApplicationJsonConfig extends WebApplicationJsonConfigBase {
    constructor() {
        super(appjson);
    }
}