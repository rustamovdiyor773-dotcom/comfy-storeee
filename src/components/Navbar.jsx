import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks';
import { Moon, ShoppingCart } from 'lucide-react';


function Navbar() {
  return (
    <nav className='bg-primary-content py-4'>
      <div className='container-element flex items-center justify-between'>
        <Link to="/" className='bg-info py-2 px-5 rounded-md text-2xl font-bold text-neutral-content'>
          C</Link>

        <ul className='flex gap-4'>
          <NavLinks />
        </ul>
        <div className='flex gap-3'>
          <button className='cursor-pointer'>
            <Moon />
          </button>
          <Link>
            <ShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  )
  return (
    <div>

    </div>
  )
}

export default Navbar


