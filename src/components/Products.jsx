import React from 'react'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux';
import { addCart } from '../store/slices/cartSlice';

const Products = () => {
    const { data, loading } = useFetch('https://fakestoreapi.com/products');

    const dispatch = useDispatch() ;

    const addToCart = (product) => {
        dispatch(addCart(product))
    }

    return (
        <section>
            <div className="container">
                {
                    loading
                        ? <h2>Loading</h2>
                        : <ul className='grid grid-cols-5 gap-5'>
                            {data.map(product => {
                                return (
                                    <li className='border border-gray-300 rounded-2xl p-3'>
                                        <img className='w-full h-[220px]' src={product.image} alt={product.title} />
                                        <div className='py-3 space-y-3'>
                                            <h3>{product.title.slice(0, 20)}</h3>
                                            <p>{product.price}$</p>
                                            <button onClick={()=> addToCart(product)} className='bg-blue-600 text-white w-full py-3 rounded-md'>Add to cart</button>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>}
            </div>
        </section>
    )
}

export default Products