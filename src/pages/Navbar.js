import React, { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4 bg-gradient-to-r from-indigo-500 to-sky-500'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img
          className='w-[30px] h-[30px] cursor-pointer'
          src='https://image.shutterstock.com/image-vector/digital-abstract-colorful-logo-creative-260nw-685427242.jpg'
          alt='logoImage'
        />
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Login
        </li>
      </ul>
      <div className='flex relative'>
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(true)}
          />
        )}
        {/* {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(false)}
          />
        )} */}
        {toggleMenu && (
          <ul
            className='z-10 fixed -top-0 -right-2 p-3 my-2 w-full h-[400px] shadow-2xl md:hidden list-none
             rounded-md text-white bg-gradient-to-r from-indigo-500 to-sky-500'
          >
            <li className='text-xl w-[40px] mx-[2px]'>
              <AiOutlineClose
                fontSize={28}
                className='text-white md:hidden cursor-pointer'
                onClick={() => setToggleMenu(false)}
              />
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops='my-2 text-lg flex flex-col justify-center items-center'
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
