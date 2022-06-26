import React from 'react'
import { Link } from "react-router-dom";

const Breadcrumb = (props: {categories: string[]}) => {

  const {categories} = props;
  const limit = categories.length - 1;
  return (
    <div className='timeLine__content'>
      <ol className='timeLine__container'>{
        categories.map( (category: string, index: number) => (
          <Link to={`/items?q=${category}`} key={index} className='timeLine__item'>{category} { index !== limit && '>'}</Link>
        ))
      }</ol>
    </div>
  )
}

export default Breadcrumb;