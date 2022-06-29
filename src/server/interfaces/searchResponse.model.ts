export interface ItemSearchResponse {
    site_id:                   string;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   Result[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   Filter[];
    available_filters:         AvailableFilter[];
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   string;
    values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   string;
    name: string;
}

export interface Filter {
    id:     string;
    name:   string;
    type:   string;
    values: FilterValue[];
}

export interface FilterValue {
    id:              string;
    name:            string;
    path_from_root?: Sort[];
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface Result {
    id:                  string;
    site_id:             string;
    title:               string;
    seller:              Seller;
    price:               number;
    prices:              Prices;
    sale_price:          null;
    currency_id:         string;
    available_quantity:  number;
    sold_quantity:       number;
    buying_mode:         string;
    listing_type_id:     string;
    stop_time:           Date;
    condition:           string;
    permalink:           string;
    thumbnail:           string;
    thumbnail_id:        string;
    accepts_mercadopago: boolean;
    installments:        Installments;
    address:             Address;
    shipping:            Shipping;
    seller_address:      SellerAddress;
    attributes:          Attribute[];
    original_price:      null;
    category_id:         string;
    official_store_id:   null;
    domain_id:           string;
    catalog_product_id:  string;
    tags:                string[];
    catalog_listing:     boolean;
    use_thumbnail_id:    boolean;
    offer_score:         null;
    offer_share:         null;
    match_score:         null;
    winner_item_id:      null;
    melicoin:            null;
    discounts:           null;
    order_backend:       number;
}

export interface Address {
    state_id:   string;
    state_name: string;
    city_id:    string;
    city_name:  string;
}

export interface Attribute {
    id:                   string;
    name:                 string;
    value_struct:         Struct | null;
    attribute_group_id:   string;
    attribute_group_name: string;
    source:               number;
    value_id:             null | string;
    value_name:           string;
    values:               AttributeValue[];
}

export interface Struct {
    number: number;
    unit:   string;
}

export interface AttributeValue {
    name:   string;
    struct: Struct | null;
    source: number;
    id:     null | string;
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: string;
}

export interface Prices {
    id:                    string;
    prices:                Price[];
    presentation:          Presentation;
    payment_method_prices: any[];
    reference_prices:      ReferencePrice[];
    purchase_discounts:    any[];
}

export interface Presentation {
    display_currency: string;
}

export interface Price {
    id:                    string;
    type:                  string;
    amount:                number;
    regular_amount:        null;
    currency_id:           string;
    last_updated:          Date;
    conditions:            Conditions;
    exchange_rate_context: string;
    metadata:              Metadata;
}

export interface Conditions {
    context_restrictions: string[];
    start_time:           Date | null;
    end_time:             Date | null;
    eligible:             boolean;
}

export interface Metadata {
}

export interface ReferencePrice {
    id:                    string;
    type:                  string;
    conditions:            Conditions;
    amount:                number;
    currency_id:           string;
    exchange_rate_context: string;
    tags:                  any[];
    last_updated:          Date;
}

export interface Seller {
    id:                 number;
    permalink:          string;
    registration_date:  Date;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    tags:               string[];
    eshop:              Eshop;
    seller_reputation:  SellerReputation;
}

export interface Eshop {
    seller:           number;
    eshop_rubro:      null;
    eshop_id:         number;
    nick_name:        string;
    site_id:          string;
    eshop_logo_url:   string;
    eshop_status_id:  number;
    eshop_experience: number;
    eshop_locations:  any[];
}

export interface SellerReputation {
    power_seller_status: string;
    level_id:            string;
    metrics:             Metrics;
    transactions:        Transactions;
}

export interface Metrics {
    cancellations:         Cancellations;
    claims:                Cancellations;
    delayed_handling_time: Cancellations;
    sales:                 Sales;
}

export interface Cancellations {
    period: string;
    rate:   number;
    value:  number;
}

export interface Sales {
    period:    string;
    completed: number;
}

export interface Transactions {
    canceled:  number;
    period:    string;
    total:     number;
    ratings:   Ratings;
    completed: number;
}

export interface Ratings {
    negative: number;
    neutral:  number;
    positive: number;
}

export interface SellerAddress {
    id:           string;
    comment:      string;
    address_line: string;
    zip_code:     string;
    country:      Sort;
    state:        Sort;
    city:         Sort;
    latitude:     string;
    longitude:    string;
}

export interface Shipping {
    free_shipping: boolean;
    mode:          string;
    tags:          string[];
    logistic_type: string;
    store_pick_up: boolean;
}