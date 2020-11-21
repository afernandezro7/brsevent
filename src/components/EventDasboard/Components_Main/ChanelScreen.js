import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import './chanelScreen.css'

export const ChanelScreen = () => {

    const { activeCH } = useSelector( state => state.channel );

    return (
        <>
            <h2 className="title1 text-center">{ activeCH.title }</h2>
            <div className="grids widget-shadow">
               
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url= {activeCH.streamSrc}
                        playing
                        controls
                        width='100%'
                        height='80%'
                    />

                    <div className="widget-shadow">
        
                        <div className="well">
                           <b className="text-primary title1">Info:</b> { activeCH.description }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
