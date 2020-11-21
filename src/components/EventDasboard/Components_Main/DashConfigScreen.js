import React from 'react'
import { DashConfigChannelCards } from './DashConfigChannelCards'
import { DashConfigChannels } from './DashConfigChannels'
import { DashConfigPonentes } from './DashConfigPonentes'
import { DashConfigPonentesTable } from './DashConfigPonentesTable'

export const DashConfigScreen = () => {


    return (
        <>
            <h2 className="title1 text-center">Configuraciones Generales</h2>

            {/* Speakers Registration */}
            <DashConfigPonentes/>

            {/* Speakers Registration Table */}
            <DashConfigPonentesTable/>


            {/* Channel Registration */}
            <DashConfigChannels/>

            {/* Channels Cards */}
            <DashConfigChannelCards/>

        </>
    )
}
