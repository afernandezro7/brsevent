import React from 'react'
import { InfoDescripcion } from './InfoDescripcion'
import { InfoPonentes } from './InfoPonentes'

export const InfoScreen = () => {
    return (
        <>
            <h2 className="title1 text-center">Información General del Evento</h2>
                
            <InfoPonentes/>

            <InfoDescripcion/>
   
            
        </>
    )
}
