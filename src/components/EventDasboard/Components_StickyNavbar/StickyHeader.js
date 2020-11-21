import React from 'react'
import PropTypes from 'prop-types'

import { StickyLeft } from './StickyLeft'
import { StickyRight } from './StickyRight'

export const StickyHeader = ({toggleAside, settoggleAside}) => {
    return (
        <div className="sticky-header header-section ">

            {/* STICKY-MENU LEFT */}
            <StickyLeft
                toggleAside={toggleAside}
                settoggleAside={settoggleAside}
            />

            {/* STICKY-MENU RIGHT */}
            <StickyRight/>

            <div className="clearfix"></div>
        </div>
    )
}


StickyHeader.propTypes = {
    toggleAside: PropTypes.bool.isRequired,
    settoggleAside: PropTypes.func.isRequired
}





