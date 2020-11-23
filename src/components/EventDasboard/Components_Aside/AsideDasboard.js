import React from 'react'

export const AsideDasboard = ({dashTag, dashboardActive, setdashboardActive, handleSelectItem}) => {
    return (
        <>
           <li 
                className= { (dashboardActive || dashTag) ? "treeview active" : "treeview" }
                onClick={ ()=> setdashboardActive(!dashboardActive)}
            >
                <div
                    className="anchor-div"
                >                  
                    <i className="fa fa-dashboard pr-2"></i>
                    <span>Dashboard</span>
                    {
                        dashboardActive 
                            ? <i className="fa fa-angle-down pull-right"></i>
                            : <i className="fa fa-angle-left pull-right"></i>
                    }
                </div>
                <ul 
                    className={ dashboardActive ? "treeview-menu menu-open" : "treeview-menu" }
                >
                    <li
                        onClick={()=>handleSelectItem('dashReg')}
                    >
                        <div className="anchor-div">
                            <i className="fa fa-angle-right"></i>Registro Usuarios
                        </div>
                    </li>
                    <li
                        onClick={()=>handleSelectItem('dashConfig')}
                    >
                        <div className="anchor-div">
                            <i className="fa fa-angle-right"></i>Configuraciones
                        </div>
                    </li>
                    <li
                        onClick={()=>handleSelectItem('dashGallery')}
                    >
                        <div className="anchor-div">
                            <i className="fa fa-angle-right"></i>Editar Galería
                        </div>
                    </li>
                </ul>
            </li>
               
        </>
    )
}
