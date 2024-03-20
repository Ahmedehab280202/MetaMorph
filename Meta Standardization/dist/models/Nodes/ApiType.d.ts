import { ApiName } from "../../types/types";
export default class ApiType {
    readonly api: ApiName;
    readonly name: string;
    constructor(api: ApiName, name: string);
}
