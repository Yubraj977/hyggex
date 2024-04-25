import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LiaGreaterThanSolid } from "react-icons/lia"

function Navindicate() {
  return (
    <div className=' flex mt-10 items-center font-inter font-bold text-sm' >
      <IoHomeOutline className=' mr-2'/>  
      <LiaGreaterThanSolid />
      <p> FlashCard </p>
      <LiaGreaterThanSolid />
     
      <p> Mathematices </p>
      <LiaGreaterThanSolid />
      <p className='text-primary'>Realtions and Functions</p>

    </div>
  )
}

export default Navindicate