import { Author, Item } from "./general.model";

export type ItemSeach = Omit<Item, 'soldQuantity' | 'description'>;

export interface SearchResponse {
    author: Author,
    categories: string[],
    items: ItemSeach[]
}