import Image from 'next/image';
import React from 'react'
import { BiSolidCoffeeBean } from 'react-icons/bi'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=' bg-orange-950 text-white flex flex-col gap-9 justify-center pt-20  '>
        
       <div className='flex flex-wrap gap-8 lg:justify-around'>
        <div className='flex flex-col ml-3 gap-5 lg:max-w-[500px]'>
                <div className='flex gap-8 items-center'>
                    <Image src="/cafe_blanco.png" width={90} height={20} alt='Photo' />
                    <div className='text-[1.3rem]'>
                        <b>cafè</b><i>delica</i>
                    </div>
                </div>
                <p className='text-[2.5rem] font-bold'>
                    El secreto de un café rico es tomarselo entre <i>Amigos</i>
                </p>
            </div>
            
            <div className='text-[1.3rem] flex flex-col gap-4 ml-3 '>
                <p>Nosotros</p>
                <p>Café</p>
                <p>Panaderia</p>
                <p>Bistro</p>
                <p>Testimonios</p>
                <p>Historia</p>
                <p>Contacto</p>
            </div>
       </div>

        <div className=' flex gap-8 text-[1.5rem] border-t-2 border-orange-900 p-8 justify-evenly lg:justify-start lg:gap-9 '>
            <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
            <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
        </div>
    </div>
  )
}

export default Footer