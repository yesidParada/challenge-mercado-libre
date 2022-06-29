import { FilterType } from "../interfaces/fliter.model";
import { querySearch, SearchResponse } from "../interfaces/search.model";
import { AvailableFilterValue, ItemSearchResponse } from "../interfaces/searchResponse.model";
import { SearchModel } from "../model/search.model";
import { Utilities } from "../utils/utilities";

export class SearchController {
    public utilities: Utilities;
    public model: SearchModel;
    constructor() {
        this.utilities = new Utilities();
        this.model = new SearchModel();
    }

    public getData(query: querySearch): Promise<SearchResponse> {
        
        const response :SearchResponse = {
            author: this.utilities.generateAuthor(),
            categories: ['', '', ''],
            items: []
        }
        if (!query) {
            return Promise.resolve(response);
        }
        return this.model.getData(query).then( (item:ItemSearchResponse) => {
            response.items = [...this.utilities.generateItems(item.results).slice(0,4)];
            const categories = this.utilities.generateCategories(this.utilities.getCategories(item.filters), FilterType.filters);
            
            if(categories.length === 0) {
                const categoriesList = this.utilities.getCategories(item.available_filters)
                                        .values.sort((a: AvailableFilterValue, b: AvailableFilterValue) =>  b.results - a.results );
                
                response.categories = [...this.utilities.generateCategories(categoriesList, FilterType.available_filters)];
            } else {
                response.categories = [...categories];
            }
            
            return response;
        })
    }
}