import { AppJsonConfigBase } from "../../../../AngularCommon/common/projects/common/src/public-api";
import appjson from '../../app.json';

export class AppJsonConfig extends AppJsonConfigBase {
    constructor() {
        super(appjson);
    }
}