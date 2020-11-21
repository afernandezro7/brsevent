import React from 'react'
import {
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { ChanelScreen } from '../components/EventDasboard/Components_Main/ChanelScreen';
import { InfoScreen } from '../components/EventDasboard/Components_Main/InfoScreen';


export const DashRouter = () => {
    return (
        
        <div>
            <Switch>
            <Route
                exact
                path="evento/info"
                component = { InfoScreen }
            />
            <Route
                exact
                path="evento/ch"
                component={ ChanelScreen }
            />
            <Redirect
                exact
                to = "evento/info"
            />
            </Switch>
        </div>
    )
}
