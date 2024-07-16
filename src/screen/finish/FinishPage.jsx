import React from 'react'
import { NavLink } from 'react-router-dom'

const FinishPage = () => {
  return (
    <div className='main-finish'>
        <div className='text-center z-10'>
            <h1 className='font-thin text-4xl select-none uppercase'>Aplikasi</h1>
            <h1 className='font-bold text-5xl select-none uppercase'>biodata</h1>
        </div>

        <NavLink 
          to={"/"} 
          className={`btn-kembali`}
          role='button'>
            Kembali
        </NavLink>
        
        <div className='bg-base'></div>
    </div>
  )
}

export default FinishPage
