import React from 'react';
import ListItem from './listItem';

const List = () => {
  return (
    <div className='list'>
        <ul className='list__container'>
          { 
            [1,2,3,4].map( item => (
              <ListItem />
            ))
          }
        </ul>
    </div>
  )
}

export default List;