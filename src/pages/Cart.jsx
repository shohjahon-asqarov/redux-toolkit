import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../store/slices/cartSlice'

const Cart = () => {
    const cartData = useSelector((store) => store.cartSlice.data)
    const dispatch = useDispatch()
    return (
        <section>
            <div className="container">
                <ul className='grid grid-cols-5 gap-5'>
                    {cartData.map(product => {
                        return (
                            <li className='border border-gray-300 rounded-2xl p-3'>
                                <img className='w-full h-[220px]' src={product.image} alt={product.title} />
                                <div className='py-3 space-y-3'>
                                    <h3>{product.title.slice(0, 20)}</h3>
                                    <p>{product.price}$</p>
                                    <button onClick={() => dispatch(removeCart(product.id))} className='bg-red-600 text-white w-full py-3 rounded-md'>Add to cart</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Cart