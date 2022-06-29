import { Author, Item } from "./general.model";

export type ItemSeach = Omit<Item, 'sold_quantity' | 'description'>;

export interface querySearch {
    q: string | string[]
}

export interface SearchResponse {
    author: Author,
    categories: string[],
    items: ItemSeach[]
}