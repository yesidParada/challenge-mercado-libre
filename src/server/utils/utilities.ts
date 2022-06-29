import { Author } from "../interfaces/general.model";
import { ItemSeach } from "../interfaces/search.model";
import { Result, Price } from "../interfaces/searchResponse.model";

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

    public generateCategories(data: any): any {
        const category =  data.find((item: any) => item.id === 'category')
        return category ? category.values.map((values: any) => values.name ) : []
    }

}