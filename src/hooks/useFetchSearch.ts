import { useEffect, useState } from 'react';
import { ItemSeach, SearchResponse } from '../model/search.model';

const useFetchSearch = (search: string) => {
  const [state, setState] = useState<{data: ItemSeach [], categories: string[], loading: boolean}> ({
    data: [{
      id: "",
      title: "",
      price: {
          currency: "ARS",
          amount: 0,
          decimals: 0
      },
      picture: "",
      condition: "",
      free_shipping: true,
      sold_quantity: 500
    }],
    categories: [],
    loading: true
  });

  useEffect(() => {
    getDataIem(search)
    .then((result: SearchResponse) => {
        setState({
            data: result.items,
            categories: result.categories,
            loading: false
        });
    })
  }, [search]);

  return state;
}

export default useFetchSearch;


export const getDataIem = async(search: string) :Promise<SearchResponse> =>  {
    const resp = await fetch(`http://localhost:3200/api/items${search}`);
    const result = await resp.json();

    return result;
}