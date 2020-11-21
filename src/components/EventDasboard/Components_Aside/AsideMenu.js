import React, { useState } from "react";
import PropTypes from 'prop-types'
import { AsideHeader } from "./AsideHeader";
import { useDispatch, useSelector } from 'react-redux'
import { chSetActiveAction, chUnSetActiveAction } from "../../../redux/actions/chActions";
import { pgSetActiveAction } from "../../../redux/actions/pageActions";


export const AsideMenu = ({toggleAside}) => {

  const [movilAside, setmovilAside] = useState(false)
  const [collapsinStyle, setcollapsinStyle] = useState("navbar-collapse collapse in")
  const [dashboardActive, setdashboardActive] = useState(false)

  const {channels} = useSelector(state => state.channel)
  const dispatch = useDispatch()

  
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

              <li 
                className= { dashboardActive ? "treeview active" : "treeview" }
                onClick={ ()=> setdashboardActive(!dashboardActive)}
              >
                <a href="#!">
                  <i className="fa fa-dashboard"></i>
                  <span>Dashboard</span>
                  {
                    dashboardActive 
                      ? <i className="fa fa-angle-down pull-right"></i>
                      : <i className="fa fa-angle-left pull-right"></i>
                  }

                </a>
                <ul 
                  className={ dashboardActive ? "treeview-menu menu-open" : "treeview-menu" }
                >
                  <li
                    onClick={()=>handleSelectItem('dashReg')}
                  >
                    <a href="#!"><i className="fa fa-angle-right"></i>Registro Usuarios</a>
                  </li>
                  <li
                    onClick={()=>handleSelectItem('dashConfig')}
                  >
                    <a href="#!"><i className="fa fa-angle-right"></i>Configuraciones</a>
                  </li>
                  <li
                    onClick={()=>handleSelectItem('dashGallery')}
                  >
                    <a href="#!"><i className="fa fa-angle-right"></i>Editar Galería</a>
                  </li>
                </ul>
              </li>
              <li 
                className="treeview"
                onClick={ ()=> handleSelectItem('info')  }  
              >
                <a href="#!">
                  <i className="fas fa-info-circle pr-2"></i>
                  <span>Información</span>
                </a>
              </li>
              <li 
                className="treeview"
                onClick={ ()=> handleSelectItem('posterPage')  }  
              >
                <a href="#!">
                  <i className="fa fa-th pr-2"></i>
                  <span>Posters del Evento</span>
                </a>
              </li>
              <li className="treeview active">
                <a href="#!">
                  <i className="fas fa-video pr-2"></i>
                  <span>Salones</span>
                  <small className="label pull-right label-info">{channels.length}</small>
                </a>
                <ul className="treeview-menu menu-open">

                  {
                    channels.map(ch =>(
                      <li 
                        key={ch.id}
                        onClick={ ()=> handleSelectChannel(ch) }
                      >
                        <a href="#!"><i className="fa fa-video"></i>{ch.title}</a>
                      </li>
                    ))
                  }
                  
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  );
};


AsideMenu.propTypes = {
  toggleAside: PropTypes.bool.isRequired 
}