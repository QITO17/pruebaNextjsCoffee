import Image from 'next/image';
import React from 'react'
import { SlLocationPin } from "react-icons/sl";


const ItemsInfo = (ruta: String | any) => {
  console.log(ruta.ruta)
  return (
    <>
    <div className='max-w-[430px] flex flex-col gap-6 text-center items-center'>
        <Image src={ruta.ruta} width={100} height={100} alt='Imagen location' />
        <p>Nombre items</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eligendi illum quidem iure dolor ipsum in voluptates eaque dolores reiciendis. Id sed velit alias aliquam! Repellendus ea magnam sint impedit?</p>
    </div>
    </>
  )
}

export default ItemsInfo