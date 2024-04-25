import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoBulbOutline } from "react-icons/io5";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import right from '/right.svg'
function Mathematices() {
  const gradient = ' bg-gradient-to-b from-primary to-blue-500'
  return (
    <div >
      <div className='flex flex-col   min-h-screen items-center '>

        <h1 className='text-primary  font-inter font-bold float-left mt-10  mr-[54rem]  text-lg'>Relation and functions (Mathematices) </h1>
        <div className="info">
          <div className='nav font-bold text-sm flex gap-4'>
            <NavLink className='text-primary border-b-2 border-blue-600 rounded-sm'>Study</NavLink>
            <NavLink>Quiz</NavLink>
            <NavLink>Test</NavLink>
            <NavLink>Game</NavLink>
            <NavLink>Others</NavLink>
          </div>



        </div>
        <div className="create">
          <div className={`h-60 w-[30rem] border mt-20 ${gradient} py-2 px-6 rounded-2xl relative text-white`}>
            <IoBulbOutline className='absolute  left-6 top-4 text-lg' />
            <IoVolumeMediumOutline className='absolute right-6 top-4 text-lg' />
            <div className='font-bold font-allerta text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute'>9x + 2x + 9 * 4x - 3</div>
            <div className='flex gap-2  justify-between px-4 w-full items-center absolute -bottom-10 left-0 text-primary font-bold'>
              <IoIosRefresh />
              <span className={`text-white  ${gradient} p-2 rounded-full `}>
                <FaLessThan />
              </span>

              <p>01/10</p>
              <span className={`text-white  ${gradient} p-2 rounded-full `}>
                <FaGreaterThan />
              </span>
              <MdOutlineZoomOutMap />
            </div>
          </div>
        </div>

        <div className='mt-16 flex justify-between items-center  px-32 w-full'>
          <img src={right} alt="" className='h-32 w-32' />
          <div className='flex items-center gap-2 font-inter font-bold text-sm text-primary'> 
            <span className={`${gradient} p-2 rounded-full text-white`}>
            <FaPlus />
            </span>
            Create FlashCard
             </div>
        </div>




      </div>
      <div className="faq">
        <h1 className='text-primary font-inter font-bold text-4xl text-left'>FAQ</h1>
        <div className='border border-blue-900 py-2 px-2 flex justify-between items-center rounded-lg mt-6 lg:w-[60rem]'>
         <p className=''>Can education flashcard be used for all age groups ?   </p>
         <FaChevronDown /> 
        </div>

        <div className='border border-blue-900 py-2 px-2 flex justify-between items-center rounded-lg mt-6 lg:w-[60rem]'>
         <p className=''>Can education flashcard be used for all age groups ?   </p>
         <FaChevronDown /> 
        </div>

        <div className='border border-blue-900 py-2 px-2 flex justify-between items-center rounded-lg mt-6 lg:w-[60rem]'>
         <p className=''>Can education flashcard be used for all age groups ?   </p>
         <FaChevronDown /> 
        </div>

        <div className='border border-blue-900 py-2 px-2 flex justify-between items-center rounded-lg mt-6 lg:w-[60rem]'>
         <p className=''>Can education flashcard be used for all age groups ?   </p>
         <FaChevronDown /> 
        </div>
      </div>
    </div>
  )
}

export default Mathematices