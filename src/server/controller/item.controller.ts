import { DetailResponse } from "../interfaces/details.model";
import { ItemModel } from "../model/item.model";
import { Utilities } from "../utils/utilities";

export class ItemController {
    public utilities: Utilities;
    public model: ItemModel;

    constructor() {
        this.utilities = new Utilities();
        this.model = new ItemModel();
    }

    public getData(id: string): Promise<DetailResponse> {
        let response: DetailResponse = {
            author: this.utilities.generateAuthor(),
            item: {
                id: '',
                title: 'string',
                price: {
                    currency: '',
                    amount: 0,
                    decimals: 0,
                },
                picture: '',
                condition: '',
                free_shipping: false,
                sold_quantity: 0,
                description: 'string'
            }
        }
        if (id) {
            return Promise.resolve(response);
        }
        return Promise.all([this.getDataById(id), this.getDataDetailById(id)]).then((items: any) => {
            const arrayDetails = items[1];
            const arrayId = items[0];
            response.item = {
                id: arrayId.id,
                title: arrayId.title,
                price: {
                    currency: arrayId.currency_id,
                    amount: arrayId.price,
                    decimals: arrayId.price,
                },
                picture: arrayId.thumbnail,
                condition: arrayId.condition,
                free_shipping: arrayId.shipping.free_shipping,
                sold_quantity: arrayId.sold_quantity,
                description: arrayDetails.plain_text
            }
            return response;
        })
    }

    public getDataById(id: string): Promise<any> {
        return this.model.getDataId(id);
    }

    public getDataDetailById(id: string): Promise<any> {
        return this.model.getDeatilId(id);
    }
}