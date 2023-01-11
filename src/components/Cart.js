import React from 'react'

const Cart = ({ product }) => {
    return (
        <div className='border-[1px]'>

            <img src={`https://amazona.onrender.com${product.image}`} alt="" className='w-full h-[250px] object-cover' />
            <div className='px-4 py-6'>
            <h1></h1>
            <a href="" className='underline text-[#22f] text-[18px] font-medium'>{product.name}</a>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {product.countInStock>0?(
                <button className='bg-amber-500 border-[1px] border-blue-400 p-2 rounded-md'>Add to cart</button>

            ):(
                <p>out of stock</p>
            )}

            </div>
        </div>

    )
}

export default Cart