import React from 'react'
import Base from '../components/Base'
import Cart from '../components/Cart'
import products from '../data.json'
const Home = () => {
  return (
    <Base>
    <h2 className='text-5xl font-bold py-4'>Featured Products</h2>
    <div className='grid grid-cols-4 gap-3'>
{products.length>0 && products.map((items)=>{
    return(
        <Cart product={items}/>
        
    )
})}
    </div>
    </Base>
  )
}

export default Home