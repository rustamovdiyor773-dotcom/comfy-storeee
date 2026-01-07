import React from 'react'
import { NavLink } from 'react-router';
import { Link } from 'react-router-dom'

const links = [
  {
    id: 1,
    text: 'Home',
    url: '/'
  },
  {
    id: 2,
    text: 'About',
    url: '/about'
  },
  {
    id: 3,
    text: 'Products',
    url: '/products'
  },
  {
    id: 4,
    text: 'Cart',
    url: '/cart'
  },

];
function NavLinks() {
  return <>
    {
      links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to={link.url} >
              {link.text}
            </NavLink>
          </li>
        );
      })}


  </>;

}

export default NavLinks;
