import React from 'react'
import { Item } from '../../model/general.model';

const Card = (details: { data: Item }) => {
  const {data} = details;
  const {price} = data;
  const { amount } = price;
  return (
    <div className='card'>
        <div className='card__content'>
            <div className='card__images'>
                <img  src={data.picture} alt="" />
            </div>
            <div className='card__info'>
                <div className='card__info--content'>
                    <label className='card__info--label'>{data.condition} - {data.sold_quantity} vendidos</label>
                    <h3 className='card__info--subtitle'>{data.title}</h3>
                </div>
                <h2 className='card__info--title'>{amount}</h2>
                <button className='btn btn--primary'>comprar</button>
            </div>
        </div>
        <div className='card__details'>
            <h2 className='card__details--title'>description</h2>
            <p className='card__details--text'>{data.description}</p>
        </div>
    </div>
  )
}

export default Card;