import React, { useEffect } from 'react'
import { DashRegister } from './DashRegister'
import { DashRegTable } from './DashRegTable'
import {useSelector, useDispatch } from 'react-redux'
import { Loading } from '../../ui/Loading'
import { startCheckingUserList } from '../../../redux/actions/userActions'


export const DashRegScreen = () => {

    const dispatch = useDispatch()
    const { checking} = useSelector( state => state.user );

    useEffect(() => {
        dispatch(startCheckingUserList())
    }, [dispatch])

    if(checking){
        return(
            <>
            <h2 className="title1 text-center">Configuraciones de Registro</h2>    
            <Loading/>
        </>
        )
    }

    return (
        <>
            <h2 className="title1 text-center">Configuraciones de Registro</h2>

            {/* Register Form */}
            <DashRegister/>
            
            {/* Users Table */}
            <DashRegTable/>
        </>
    )
}
