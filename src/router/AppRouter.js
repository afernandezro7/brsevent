import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { EventDasboardScreen } from '../components/EventDasboard/EventDasboardScreen';
import { LoginScreen } from '../components/LoginScreen/LoginScreen';
import { Loading } from '../components/ui/Loading';
import { startCheckingAction } from '../redux/actions/authActions';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

 

    const dispatch = useDispatch();

    const {checking, uid} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startCheckingAction())
        
    }, [dispatch])

    if(checking){
        return <Loading/>
    }

    return (
        <Router>
            <div>
            
                <Switch>
                <PrivateRoute
                    isLogged= { !!uid }
                    exact
                    path="/evento"
                    component = { EventDasboardScreen }
                />
                <PublicRoute
                    isLogged= { !!uid }
                    exact
                    path="/login"
                    component={ LoginScreen }
                />

                <Redirect
                    exact
                    to = "/login"
                />
                  
                </Switch>
            </div>
        </Router>
    )
}
