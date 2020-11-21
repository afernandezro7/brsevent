import React from 'react'

export const AsideHeader = ({movilAside, setmovilAside, setcollapsinStyle}) => {

  const handleMovilDropDown = ()=>{
    setmovilAside(!movilAside)

    if (movilAside) {
      setcollapsinStyle("navbar-collapse collapsing")
      setTimeout(() => {
        setcollapsinStyle("navbar-collapse collapse in")
      }, 800);
      
    }
  }

    return (
        <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".collapse"
              aria-expanded="false"
              onClick={ handleMovilDropDown }
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <h1>
              <a className="navbar-brand" href="#!">
                <i className="fas fa-running"></i>
                Evento
                <span className="dashboard_text">CubaMotricidad 2020</span>
              </a>
            </h1>
        </div>
    )
}
