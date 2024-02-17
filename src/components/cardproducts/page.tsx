import Image from 'next/image'
import React from 'react'

const CardProducto = (ruta: String | any) => {
  return (
    <>
        <div className='max-w-[430px] flex flex-col gap-6 text-center items-center '>
            <div>
                <Image className='rounded-[40px] h-[400px]' src={ruta.ruta} width={400} height={550} alt='Photo Products' />
            </div>

            <div className='text-[1.2rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur quo iste alias ipsa animi totam inventore veritatis nam 
            </div>

        </div>
    </>
  )
}

export default CardProducto