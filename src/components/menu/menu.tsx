import Link from 'next/link'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const MenuOpciones = ( { menu, setmenu }:any) => {
    const ponerQuitarMenu = () => {
            console.log(setmenu)
            setmenu(!menu);
        }
        
  return (
    <div>
      <div className='lg:hidden absolute top-[0] menu justify-center opacity-65 bg-orange-900 text-white flex flex-col items-center w-full h-screen '>
          <AiFillCloseCircle onClick={ponerQuitarMenu} className='text-[2.5rem] absolute top-2 right-2' />
          <Link className='text-[2rem]' href="/inicio">Inicio</Link>
          <Link className='text-[2rem]' href="/contacto">Contacto</Link>
      </div>
    </div>
  )
}

export default MenuOpciones