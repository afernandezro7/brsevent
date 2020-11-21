import React from 'react'
import PropTypes from 'prop-types'

export const StickyLeft = ({toggleAside, settoggleAside}) => {

    
    const handleHideAside = ()=>{
        settoggleAside(!toggleAside)
    }


    return (
        <div className="header-left">
            {/* <!--toggle button start--> */}
				<button 
                    id="showLeftPush" 
                    className={ !toggleAside ? null :'active'}
                    onClick={ handleHideAside }
                >
                    <i className="fa fa-bars"></i>
                </button>
			{/* <!--toggle button end--> */}
        </div>
    )
}



StickyLeft.propTypes = {
    toggleAside: PropTypes.bool.isRequired,
    settoggleAside: PropTypes.func.isRequired 
}


