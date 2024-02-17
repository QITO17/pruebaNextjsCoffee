"use client"
import Mapa from '@/components/Map/page'
import Footer from '@/components/footer/page'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { AiFillCloseCircle } from "react-icons/ai";
import MenuOpciones from '@/components/menu/menu'


const Contacto = () => {

  const [menu, setmenu] = useState(false);
  
  const ponerQuitarMenu = () => {
    console.log('Hola')
    if(!menu){
      console.log('hola2')
      setmenu(!menu)
    }else{
      console.log('aaaaaaaaaaaaaaaa')
      setmenu(!menu)
    }
  }

  return (
    <div className=' flex flex-col gap-[70px]'>
      
        <div className='hidden max-w-[1024px] lg:mx-auto lg:mt-4 lg:block w-full text-white lg:flex items-center justify-between p-[1rem] bg-black rounded-[30px] mx-[10px] opacity-[.8] '>
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

        <div  className=' gap-7 flex flex-wrap mx-4 justify-center items-center lg:justify-around '>

          <div className='w-[400px]'>

            <p className=' text-[2.5rem] font-bold w-[250px] mb-4 '>¿Querés Hablar?</p>

            <form action="https://formsubmit.co/digital@marabunta.co" method='POST' className=' flex flex-col gap-6  max-w-[500px] '>

                <input className='  border border-orange-900 p-2 rounded-[5px] ' type="text" name="Nombre" id="" placeholder='Tu Nombre' />
                
                <input className='  border border-orange-900 p-2 rounded-[5px] ' type="text" name="Correo_remitente" id="" placeholder='Tu correo' />
                
                <input className='  border border-orange-900 p-2 rounded-[5px] ' type="text" name="Telefono" id="" placeholder='Tu teléfono' />

                <textarea className='border border-orange-900 p-2 rounded-[5px]' name="Descripciòn" id="" cols={20} rows={10}></textarea>
           
                <input type="submit" value="Enviar" />

                <input type="hidden" name="_subject" value="¡Prueba tècnica FS Marabunta!" />


            </form>
            <div className='flex justify-center mt-8'>
                <button  className='border py-2 px-8 rounded-[15px] colorTexto max-w-[250px]  '>Contáctanos</button>
            </div>
          </div>

          <div className=' w-[400px] '>
            <Mapa />
          </div>
        
        </div>

        {
          menu ? <MenuOpciones menu={menu} setmenu={setmenu} /> : <p></p>
        }

        <Footer />


        
        

    </div>
  )
}

export default Contacto