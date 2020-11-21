import React from 'react'
import { useSelector } from 'react-redux';
import { ChanelScreen } from './ChanelScreen'
import { DashConfigScreen } from './DashConfigScreen';
import { DashGalleryScreen } from './DashGalleryScreen';
import { DashRegScreen } from './DashRegScreen';
import { InfoScreen } from './InfoScreen';
import { PosterGalleryScreen } from './PosterGalleryScreen';

export const MainWraper = () => {

    const { activeCH } = useSelector(state => state.channel)
    const { activePg } = useSelector(state => state.page)

    

    if(activeCH  === null){

        switch (activePg) {
            case 'info':
                return <InfoScreen/>
            case 'dashReg':
                return <DashRegScreen/>
            case 'dashConfig':
                return <DashConfigScreen/>
            case 'dashGallery':
                return <DashGalleryScreen/>
            case 'posterPage':
                return <PosterGalleryScreen/>
            default:
                return <InfoScreen/>
        }

        
    }

    return (
        <>
            <ChanelScreen/>
        </>
    )
}
