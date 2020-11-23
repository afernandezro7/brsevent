import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { AsideHeader } from "./AsideHeader";
import { useDispatch, useSelector } from 'react-redux'
import { chSetActiveAction, chUnSetActiveAction } from "../../../redux/actions/chActions";
import { pgSetActiveAction } from "../../../redux/actions/pageActions";
import { AsideDasboard } from "./AsideDasboard";
import { AsideChannelSelector } from "./AsideChannelSelector";

const roleDasboardAccessWhiteList = ['ADMIN_ROLE']

const tagsStyleInitialState = {
    dashTag:false,
    infoTag:false,
    galleryTag:false,
    channelsTag:false,
}

export const AsideMenuScreen = ({toggleAside}) => {

    const [movilAside, setmovilAside] = useState(false)
    const [collapsinStyle, setcollapsinStyle] = useState("navbar-collapse collapse in")
    const [dashboardActive, setdashboardActive] = useState(false)
    const [channelActive, setchannelActive] = useState(false)

    const [AsidetagActive, setAsidetagActive] = useState(tagsStyleInitialState)
    const { dashTag, infoTag, galleryTag, channelsTag} = AsidetagActive

    const { role } = useSelector(state => state.auth)
    const { activePg } = useSelector(state => state.page)
    const dispatch = useDispatch()

    useEffect(() => {
        
        switch (activePg) {
            case 'info':
                setAsidetagActive({
                    ...tagsStyleInitialState,
                    infoTag:true
                })
                break;
            case 'posterPage':
                setAsidetagActive({
                    ...tagsStyleInitialState,
                    galleryTag:true
                })
                break;
            default:
                break;
        }
    }, [activePg])

    
    const handleSelectChannel = (ch)=>{
        dispatch(chSetActiveAction(ch))
    }

    const handleSelectItem = (target)=>{
        dispatch(pgSetActiveAction(target))
        dispatch(chUnSetActiveAction()) 
    }

    return (
        <div
            className={ !toggleAside ? 'cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left' :'cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left cbp-spmenu-open'} 
            id="cbp-spmenu-s1"
        >
            <aside className="sidebar-left">
                <nav className="navbar navbar-inverse">

                    {/* ASIDE HEADER */}
                    <AsideHeader
                        movilAside={movilAside} 
                        setmovilAside={setmovilAside}
                        setcollapsinStyle={setcollapsinStyle}
                    />

                    <div
                        id="bs-example-navbar-collapse-1"
                        className={ movilAside ? collapsinStyle : "collapse navbar-collapse"}
                        aria-expanded={ movilAside }
                    >
                        <ul className="sidebar-menu">
                            <li className="header">NAVEGACIÓN</li>

                            {/* ASIDE DASBOARD SELECTOR */}
                            {
                                roleDasboardAccessWhiteList.indexOf(role) >= 0
                                    &&
                                        <AsideDasboard
                                            dashTag= {dashTag}
                                            dashboardActive={dashboardActive}
                                            setdashboardActive={setdashboardActive}
                                            handleSelectItem={handleSelectItem}
                                        />
                            }

                            <li 
                                className={infoTag ? "treeview ative" : "treeview"}
                                onClick={ ()=> handleSelectItem('info')  }  
                            >
                                <div className="anchor-div">
                                    <i className="fas fa-info-circle pr-2"></i>
                                    <span>Información</span>
                                </div>
                            </li>
                            <li 
                                className={galleryTag ? "treeview ative" : "treeview"}
                                onClick={ ()=> handleSelectItem('posterPage')  }  
                            >
                                <div className="anchor-div">
                                    <i className="fa fa-th pr-2"></i>
                                    <span>Posters del Evento</span>
                                </div>
                            </li>

                            <AsideChannelSelector
                                channelsTag={channelsTag}
                                channelActive={ channelActive }
                                setchannelActive={ setchannelActive }
                                handleSelectChannel={ handleSelectChannel }
                            />
                        </ul>
                  </div>
                </nav>
            </aside>
        </div>
    );
};


AsideMenuScreen.propTypes = {
  toggleAside: PropTypes.bool.isRequired 
}