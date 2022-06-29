import { FilterType } from "../interfaces/fliter.model";
import { Author } from "../interfaces/general.model";
import { ItemSeach } from "../interfaces/search.model";
import { Result, Price, Filter, AvailableFilterValue, FilterValue, AvailableFilter } from "../interfaces/searchResponse.model";

export class Utilities {
    public validateValue(object: any, item: string): boolean {
        return object[item];
    }

    public generateAuthor(): Author {
        const author: Author = {
            name: "yesid",
            last_name: "parada Granados"
        };
        return author;
    }

    public generateItems(data: Result[]): ItemSeach[] {
        const result: ItemSeach[] = data.map((item: Result) => {
            const prices: any = item.prices.prices.find((price: Price) => price.type === 'standard');
            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: prices.currency_id,
                    amount: prices.amount,
                    decimals: prices.amount
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping
            }
        })
        return result;
    }

    public getCategories(data: Array<Filter | AvailableFilter>): Filter | AvailableFilter {
        return data.find((item: any) => item.id === 'category');
    }

    public generateCategories(data: Filter | any, type: FilterType): string[] {
        if(!data) {
            return []
        }
        if(type === FilterType.available_filters) {
            return data.map((values: AvailableFilterValue) => values.name)
        } else {
            return data.values[0].path_from_root.map((values: FilterValue) => values.name )
        }
    }

}