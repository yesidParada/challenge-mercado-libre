export interface Author {
    name: string,
    lastName: string,
}

export interface Price {
    currency: String,
    amount: number,
    decimals: number,
}

export interface Item {
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity: number,
    description: string
}