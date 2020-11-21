import React from 'react'
import { DashGalleryCards } from './DashGalleryCards'
import { DashGalleryForm } from './DashGalleryForm'

export const DashGalleryScreen = () => {
    return (
        <>
            <h2 className="title1 text-center">Configuraciones de Galería</h2>

            {/* Gallery Form */}
            <DashGalleryForm/>

            {/* Gallery Cards*/}
            <DashGalleryCards/>
            


        </>
    )
}
