import React from 'react'

const SideBar = () => {
  return (
    <div>
        <div className="h-[100vh]  bg-[#404040] text-[#fff]">
            <h1 className='font-bold px-4 py-3'>category</h1>
            <ul className='py-[10px] flex flex-col gap-y-4'>
                <li><a className='text-[#22f] hover:text-[#f22]' href="/home">home</a></li>
                <li><a className='text-[#22f] hover:text-[#f22]' href="/contact">contact</a></li>
                <li><a className='text-[#22f] hover:text-[#f22]' href="/service">service</a></li>
                <li><a className='text-[#22f] hover:text-[#f22]' href="/feedback">feedback</a></li>
                <li><a className='text-[#22f] hover:text-[#f22]' href="/mathematics">mathematics</a></li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar