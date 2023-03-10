import { Headphones } from 'phosphor-react'
import React from 'react'

const Header = () => {
  return (
    <header className='fixed z-10 top-2 w-full mx-auto  left-0 px-2'>

      <div className='flex items-center justify-between py-4  border-b border-gray-700 max-w-[1000px] mx-auto glass px-2 ' >

        <div>
          <h2>Matheus<span className='font-bold text-purple-500' >Altrão</span> </h2>
        </div>

        <div className='flex items-center gap-1' >
          <h2>Lofi Songs</h2>
          <Headphones size={26} className='text-purple-500' />
        </div>

      </div>

    </header>
  )
}

export default Header
