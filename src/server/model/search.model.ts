import { querySearch } from "../interfaces/search.model";
import { url } from "../utils/constants";
import { GetData } from "../utils/getData";

export class SearchModel {
    public dataApi: GetData;
    private _url = `${url}sites/MLA/search`;

    constructor() {
        this.dataApi = new GetData();
    }

    public getData(query: querySearch): any {
        return this.dataApi.get(this._url, query);
    }
}