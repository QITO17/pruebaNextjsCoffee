import React from 'react'
import CardProducto from '../cardproducts/page'
import ItemsInfo from '../seccion_info/page'
import Image from 'next/image'

const Principal = () => {
  const rutasImg: string[] = ['/location1.png', '/location2.png'];
  const rutasProduc: string[] = ['/produc1.jpeg', '/produc2.jpeg', '/produc3.jpeg', ]
  return (
    <div className='flex flex-wrap justify-center my-20 gap-16 lg:flex-col '>
        <div className='max-w-[430px] flex flex-col gap-6 text-center items-center lg:mx-auto lg:max-w-[1000px] '>
            <div>
                <Image className='rounded-[40px] h-[400px]' src="/producto1.jpeg" width={400} height={550} alt='Photo Products' />
            </div>

            <div>
              <div>
                  <h1 className='text-[25px] font-bold'>Nombre producto</h1>
              </div>

              <div className='text-[1.2rem]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur quo iste alias ipsa animi totam inventore veritatis nam 
              </div>
            </div>

        </div>
        <div className='lg:flex justify-evenly max-w-[1024px] mx-auto'>
          {
            rutasImg.map((ruta: String, index) => (
              <ItemsInfo key = {index} ruta={ruta} />
            ))
          }
        </div>

          <div className='lg:flex gap-7 flex-col max-w-[1024px] mx-auto'>
            <p className='text-[2rem] font-bold'>Nuestros Servicios</p>

            <div className='lg:flex justify-evenly gap-4 '>
              {
                rutasProduc.map((ruta: String, index) => (
                  <CardProducto key={index} ruta = { ruta } />
                ))
              }
            </div>

          </div>
        
        <div className=' flex flex-col w-full h-[930px] justify-around items-center fonde_principal '>
            <div className='text-center text-yellow-400 font-bold'>
            <p className='text-[2rem] max-w-[500px]'>Café Delicia, tomamos la vida con calma. Servimos con cuidado y todo lo necesario para tu taza de cada día¡</p>
            </div>
        </div>

        <div className='relative min-w-[400px] min-h-[450px] mx-[40px] mt-10 max-w-[1024px] lg:mx-auto lg:gap-8 lg:flex flex-col lg:flex-row'>
            <div className='lg:flex gap-6 items-center lg:w-[1000px] lg:h-[900px]'>
              <Image className='rounded-[40px] h-[300px] lg:h-[700px] lg:w-[800px]' src="/card1.jpeg" height={300} width={250} alt='Photo Products' />
            </div>

            <div className='flex justify-end lg:flex-col lg:gap-6'>
            <div className=' lg:block hidden mb-10 flex flex-col gap-10 items-center justify-center text-center font-semibold text-[1.3rem] max-w-[1024px] mx-auto'>
                <p className='text-[4rem] font-bold'>¡Caénos!</p>

                <p className='text-gray-700'>Estamos en el barrio Granada, al lado de Container Park y diagonal a 1975</p>

                <button className='border py-2 px-8 rounded-[15px] colorTexto'>Contáctanos</button>
              </div>
              <Image className='rounded-[40px] h-[300px] absolute right-0 bottom-0 lg:h-[500px] lg:w-[1000px] lg:relative' src="/card2.jpeg" height={300} width={250} alt='Photo Products' />
            </div>
        </div>

        <div className='lg:hidden mb-10 flex flex-col gap-10 items-center justify-center text-center font-semibold text-[1.3rem] max-w-[1024px] mx-auto'>
            <p className='text-[4rem] font-bold'>¡Caénos!</p>

            <p className='text-gray-700'>Estamos en el barrio Granada, al lado de Container Park y diagonal a 1975</p>

            <button className='border py-2 px-8 rounded-[15px] colorTexto'>Contáctanos</button>
        </div>

        <div className=''>

        </div>

    </div>
  )
}

export default Principal