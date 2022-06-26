import React from 'react';
import { ItemSeach } from '../../model/search.model';
import { Link } from "react-router-dom";


const ListItem = (props: {data: ItemSeach}) => {
  const {data} = props;
  return (
    <div className='list__item'>
        <img src={data.picture} alt="" />
        <div className='list__item--content'>
            <div className='list__item--title'>
                <p>{data.price.amount}</p>
                <span>bogota</span>
            </div>
            <Link to={`/items/${data.id}`} className='list__item--detail'>{data.title}</Link>
        </div>
    </div>
  )
}

export default ListItem