import React from 'react'

const ListItem = () => {
  return (
    <div className='list__item'>
        <img src="https://http2.mlstatic.com/D_NQ_NP_694850-MCO44742128740_012021-V.webp" alt="" />
        <div className='list__item--content'>
            <div className='list__item--title'>
                <p>$1998</p>
                <span>bogota</span>
            </div>
            <div className='list__item--detail'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi voluptas fuga vel quam aspernatur error aut consequuntur a laudantium quibusdam rerum expedita ullam, quae quis totam ut. Porro, alias?</div>
        </div>
    </div>
  )
}

export default ListItem