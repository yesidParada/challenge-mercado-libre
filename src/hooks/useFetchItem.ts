import { useEffect, useState } from 'react'
import { Item } from '../model/general.model';
const { PORT} = process.env;

const useFetchItem = (id: string) => {
  const [state, setState] = useState<{data:Item, loading: boolean}> ({
    data: {
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
      sold_quantity: 500,
      description: ""
    },
    loading: true
  });

  useEffect(() => {
    getDataIem(id)
    .then((data: Item) => {
        setState({
            data,
            loading: false
        });
    })
  }, [id]);

  return state;
}

export default useFetchItem;


export const getDataIem = async(id: string) :Promise<Item> =>  {
    const resp = await fetch(`http://localhost:3200/api/item/${id}`);
    const {item} = await resp.json();

    return item;
}