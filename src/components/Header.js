import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { HiEllipsisHorizontal, HiOutlineBars3 } from 'react-icons/hi2';

const Header = ({vicky}) => {

    return (
        <div className='bg-[#222] flex justify-between text-[#fff] py-2 items-center text-[20px]'>
            <div className='flex gap-4 px-4 items-center'>
                <HiOutlineBars3 size={35} className="cursor-pointer" onClick={()=>vicky()} />
                <h1 className='text-2xl font-bold'>amazon</h1>
                <div className='flex items-center h-[40px] w-full rounded-md overflow-hidden'>
                    <input className='text-[#404040] text-[15px] text-center outline-none border-none w-full h-full' type="search" placeholder='Search products...' />
                    <div className='h-full bg-amber-700 px-4 flex items-center justify-center'>
                        <AiOutlineSearch className='text-[#fff] ' />

                    </div>

                </div>

            </div>
            <div className='flex px-4 gap-4'>
                <h1>cart</h1>
                <h1>sign In</h1>
            </div>
        </div>
    )
}

export default Header