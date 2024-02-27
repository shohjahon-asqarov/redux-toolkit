import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const cartData = useSelector((store) => store.cartSlice.data)
    return (
        <header>
            <div className="container flex justify-between items-center py-8">
                <Link to='/' className='text-2xl font-bold'>Logo</Link>

                <Link to={`/cart`} className='bg-gray-200 pl-3 pr-4 py-2 rounded-lg relative'>
                    <i className='bi bi-cart'></i>
                    <span className='absolute top-0 right-1'>{cartData.length}</span>
                </Link>
            </div>
        </header>
    )
}

export default Navbar