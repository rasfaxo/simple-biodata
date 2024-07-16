import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='main-home'>
        <div className='text-center z-10'>
            <h1 className='font-thin text-4xl select-none uppercase'>aplikasi</h1>
            <h1 className='font-bold text-5xl select-none uppercase'>biodata</h1>
            <img src="src/assets/alif.png" alt="Foto Alif" className='w-[200px]' />
        </div>

        <NavLink 
          to={"/biodata"} 
          className={`btn-biodata`}
          role='button'>
            isi biodata
        </NavLink>
        
        <NavLink 
          to={"/list"} 
          className={`btn-list`}
          role='button'>
            list biodata
        </NavLink>
        
        <div className='bg-base'></div>
    </div>
  )
}

export default HomePage
