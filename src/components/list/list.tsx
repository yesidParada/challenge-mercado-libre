import React from 'react';
import { ItemSeach } from '../../model/search.model';
import ListItem from './listItem';

const List = (props: { data: ItemSeach[] }) => {
  const {data} = props;
  return (
    <div className='list'>
        <ul className='list__container'>
          { 
            data.map( (item: ItemSeach) => (
              <ListItem
                key={item.id}
                data={item}
              />
            ))
          }
        </ul>
    </div>
  )
}

export default List;