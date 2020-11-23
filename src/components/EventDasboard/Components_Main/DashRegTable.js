import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { startDeleteUser } from '../../../redux/actions/userActions';

const { Column } = Table;


export const DashRegTable = () => {

    const dispatch = useDispatch()
    const { users } = useSelector( state => state.user );
    

    const handleDeleteUser = (e,{key}) =>{
        dispatch(startDeleteUser(key))
    }


    return (
        <>
            <div className="bs-example widget-shadow">

                <div className="card">
                    <div className="card-header">
                        <h2 className="text-secundary title1">Usuarios Registrados</h2>

                        <Table 
                            dataSource={
                                users.map( user =>(
                                        {
                                            key: user.uid,
                                            name: user.name,
                                            email: user.email,
                                            role: user.role 
                                        })
                                )
                            }
                            scroll={{ x: 650 }}
                        >
                            <Column title="Nombre" dataIndex="name" key="name" width="50" fixed="left"/>
                            <Column title="Email" dataIndex="email" key="email" />
                            <Column title="Role" dataIndex="role" key="role" />
                            <Column
                                title="Acción"
                                key="action"
                                render={ (text, record) => 
                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={ (e)=>handleDeleteUser(e,record) }
                                    >Delete</button>
                                }
                            />
                        </Table>

                    </div>
                </div>
            </div>
        </>
    )
}
