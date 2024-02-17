"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BiSolidCoffeeBean } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import MenuOpciones from '../menu/menu';

const Header = (): React.ReactNode => {

  const [menu, setmenu] = useState(false);
   
  const ponerQuitarMenu = () => {
      setmenu(!menu)
  }
  return (
    <>
      <div className=' flex flex-col w-full h-[930px] justify-around px-4 items-center fonde_header '>
        <div className='hidden lg:block w-full text-white lg:flex items-center justify-between p-[1rem] bg-black rounded-[30px] mx-[10px] opacity-[.8] '>
          <div className=' flex items-center '>
            <Image src="/cafe_blanco.png" width={30} height={20} alt='Photo' /><b>cafè</b><i>delica</i>
          </div>
          <div className="menu"><Link className='pr-2' href="/inicio">Inicio</Link><Link href="/contacto">Contacto</Link></div>
        </div>

        <div className='lg:hidden w-full text-white flex items-center justify-between p-[1rem] bg-black rounded-[30px] mx-[10px] opacity-[.8] '>
          <div className=' flex items-center '>
            <Image src="/cafe_blanco.png" width={30} height={20} alt='Photo' /><b>cafè</b><i>delica</i>
          </div>
          <div className="menu"><CiMenuBurger onClick={ponerQuitarMenu} className='text-[25px]' /></div>
        </div>

        <div className='text-center text-white'>
          <p className='font-bold text-[35px]	'>Difrutá el sabor autentico en</p>
          <p><span className=' text-[35px] font-bold text-orange-500 '>café</span><i className='text-orange-500'>delicia</i></p>
          <p className='text-[18px]'>Café Delicia es una experiencia unica con café de alta calidad y❤ un ambiente parchado para todos. !Vení y difrutá de un momento de delicia con nosotros¡</p>
        </div>
        
        <div className='flex flex-col gap-[20px] items-center text-white'>
          <p className='font-bold	'>Conocenos</p>
          <div className="logo"><MdOutlineKeyboardDoubleArrowDown className='text-[50px]' /></div>
        </div>
      </div>

      {
          menu ? <MenuOpciones menu={menu} setmenu={setmenu} /> : <p></p>
      }
    </>
  )
}

export default Header