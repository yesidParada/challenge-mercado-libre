import { ItemDetailResponse } from "../interfaces/itemDetailsResponse.model";
import { ItemResponse } from "../interfaces/itemResponse.model";
import { url } from "../utils/constants";
import { GetData } from "../utils/getData";

export class ItemModel {
    public dataApi: GetData;
    private _url = `${url}items/`;

    constructor() {
        this.dataApi = new GetData();
    }

    public getDataId(query: string): Promise<ItemResponse> {
        return this.dataApi.get(`${this._url}${query}`);
    }

    public getDeatilId(query: string): Promise<ItemDetailResponse> {
        return this.dataApi.get(`${this._url}${query}/description`);
    }
}