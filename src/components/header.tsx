import { useState } from 'react';
import logo from '../assets/Logo_ML@2x.png.png.png';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [inputValue, setinputValue] = useState('');
  let navigate = useNavigate();

  const handleInputChange = (event: any) => {
    setinputValue(event.target.value)
  }

  const  handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue.trim().length > 2) {
      navigate(`/items?q=${inputValue.trim()}`, { replace: true })
    }
  }
  return (
    <div className='header'>
      <Link className='header_logo' to='/'><img  src={logo} alt="" /></Link>
      <form className='header_search' onSubmit={handleSubmit}>
        <input className='header_search--input'
          type="text"
          placeholder="Nunca dejes de buscar"
          value={inputValue}
          onChange={handleInputChange}
          />
        <button className='header_search--button' type='submit'>
          <div className='header_search--icon'>
          </div>
        </button>
      </form>
    </div>
  )
}


export default Header;