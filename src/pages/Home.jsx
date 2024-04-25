import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
    return (
        <div className='h-screen'>
            <h1 className='font-inter text-black font-bold text-2xl mt-40'>Swith to Flashcard please</h1>
            <h1 className='font-inter text-black font-bold text-2xl '>to view Design</h1>
            <p className='font-inter  font-bold text-2xl text-black  px-4 py-2 border-full '>
                <NavLink to='/flashcard/mathematices' className='bg-primary text-white px-4 py-2 rounded-full' >
                    click Here
                </NavLink>


            </p>

        </div>
    )
}

export default Home