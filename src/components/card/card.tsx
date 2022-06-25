import React from 'react'

const Card = () => {
  return (
    <div className='card'>
        <div className='card__content'>
            <div className='card__images'>
                <img  src="https://http2.mlstatic.com/D_NQ_NP_982239-MLA49140603797_022022-F.webp" alt="" />
            </div>
            <div className='card__info'>
                <div className='card__info--content'>
                    <label className='card__info--label'>nuevo - 321 vendidos</label>
                    <h3 className='card__info--subtitle'>Teclado Gamer Redragon Yama K550 Qwerty Outemu Purple Español Latinoamérica Color Negro Con Luz Rgb</h3>
                </div>
                <h2 className='card__info--title'>$1992</h2>
                <button className='btn btn--primary'>comprar</button>
            </div>
        </div>
        <div className='card__details'>
            <h2 className='card__details--title'>description</h2>
            <p className='card__details--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aut quasi ipsam dolorem facere commodi blanditiis? Sapiente consectetur molestias, tempore ex aspernatur, corrupti totam beatae quia distinctio doloribus explicabo vero!</p>
        </div>
    </div>
  )
}

export default Card;