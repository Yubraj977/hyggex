import React from 'react'
import logo from '/logo.svg'
import { NavLink } from 'react-router-dom'
function Navigation() {
    return (
        <div className='flex justify-between '>
            <img src={logo} alt="" />
            <div className="right flex gap-5 font-inter text-sm  items-center ">
                <NavLink>Home</NavLink>
                <NavLink to='/flashcard/mathematices'>FlashCard</NavLink>
                <NavLink>Contact</NavLink>
                <NavLink>Faq</NavLink>
                <NavLink className='bg-gradient-to-b from-primary to-blue-500 py-2 px-6 rounded-2xl text-white '>Login</NavLink>
             



            </div>
        </div>
    )
}

export default Navigation