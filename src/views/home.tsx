import React from 'react';
import List from '../components/list/list';
const Home = () => {
  return (
    <div>
        <div className='timeLine__content'>
            <ol className='timeLine__container'><li className='timeLine__item'>uno</li><li> {'>'} </li><li>dos</li></ol>
        </div>
        <List />
    </div>
  )
};

export default Home;
