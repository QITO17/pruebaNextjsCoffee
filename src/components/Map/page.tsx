"use client"

import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

const Mapa = () => {
        
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      
        const mapInit = async () => {
            const loader = new Loader({
                apiKey: "AIzaSyDPv5Wr9JekCtFwTh_BArNjgBMM0EvjaQI",
                version: 'weekly',
            })
            const { Map } = await loader.importLibrary('maps');

            const position = {
                lat: 3.43722,
                lng: -76.5225,
            }

            const Optiones: google.maps.MapOptions = {
                zoom: 10,
                center: position,
                mapId: "MY_NEXTJS_MAPID"
            }

            const mapa = new Map(mapRef.current as HTMLDivElement, Optiones);

            

        }

        mapInit();
    }, [])
    


   return (
    <div className='max-w-[450px]'>
        <div className=' mt-7 min-w-full h-[360px]'  ref={mapRef} />
    </div>
  )
}

export default Mapa