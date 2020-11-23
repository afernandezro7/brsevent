import React, { useEffect, useState } from 'react'
import { AsideMenuScreen } from './Components_Aside/AsideMenuScreen';
import { StickyHeader } from './Components_StickyNavbar/StickyHeader';

import './css/bootstrap.css'
import './css/base.css'
import './css/font-awesome.css';
import './css/SidebarNav.min.css'
import './css/custom.css'
import { MainWraper } from './Components_Main/MainWraper';
import { FooterScreen } from './Components_Footer/FooterScreen';
import { useDispatch, useSelector } from 'react-redux';
import { startCheckingChannelList } from '../../redux/actions/chActions';
import { Loading } from '../ui/Loading';
import { startCheckingSpeakersList } from '../../redux/actions/speakerActions';
import { startCheckingPostersList } from '../../redux/actions/posterActions';


export const EventDasboardScreen = () => {

    const [toggleAside, settoggleAside] = useState(false)

    const { checking:channelChecking } = useSelector( state => state.channel );
    const { checking:speakersChecking } = useSelector( state => state.speaker );
    const { checking:postersChecking } = useSelector( state => state.poster );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startCheckingSpeakersList())
        dispatch(startCheckingChannelList())
        dispatch(startCheckingPostersList())

    }, [dispatch])

    if(channelChecking || speakersChecking || postersChecking){
        return(
            <> 
                <Loading/>
            </>
        )
    }

    return (
        <div 
            className={ !toggleAside ? 'cbp-spmenu-push' :'cbp-spmenu-push cbp-spmenu-push-toright'}
        >
            <div className="main-content">
                {/* ASIDE-MENU */}
		        <AsideMenuScreen
                    toggleAside={toggleAside}
                />

                {/* STICKY-NAVBAR */}
                <StickyHeader
                    toggleAside={toggleAside}
                    settoggleAside={settoggleAside}
                />

                {/* MainWraper */}
                <div id="page-wrapper">
                    <div className="main-page">
                        <MainWraper/>
                    </div>


                </div>

                {/* FOOTER */}
                <FooterScreen/>


            </div>
        </div>
    )
}
