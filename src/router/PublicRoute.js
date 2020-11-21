import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isLogged,
    component: Component,
    ...rest
}) => {

    return (
        <Route { ...rest }
            component={ (props) => (
                ( !isLogged )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/evento" exact/> )
            )}
        
        />
    )
}

PublicRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
