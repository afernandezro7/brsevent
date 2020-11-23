import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { startDeleteSpeaker } from '../../../redux/actions/speakerActions';

const { Column } = Table;

export const DashConfigPonentesTable = () => {
    const dispatch = useDispatch()
    const { speakers } = useSelector( state => state.speaker );
    

    const handleDeleteUser = (e,{key}) =>{
        const speakerId = key
        const speakerUid = speakers.find( speaker => speaker.id === key).usuario.uid
        dispatch(startDeleteSpeaker(speakerId, speakerUid ))
    }


    return (
        <>
            <div className="bs-example widget-shadow">

                <div className="card">
                    <div className="card-header">
                        <h2 className="text-secundary title1">Ponentes Registrados</h2>

                        <Table 
                            dataSource={
                                speakers.map( speaker =>(
                                        {
                                            key: speaker.id,
                                            name: speaker.name,
                                            title: speaker.title,
                                            topic: speaker.topic ,
                                            country: speaker.country,
                                            whatsApp: speaker.whatsApp
                                             
                                        })
                                )
                            }
                            scroll={{ x: 650 }}
                        >
                            <Column title="Nombre" dataIndex="name" key="name" width="50" fixed="left"/>
                            <Column title="Título" dataIndex="title" key="title" />
                            <Column title="Tema" dataIndex="topic" key="topic" />
                            <Column title="País" dataIndex="country" key="country" />
                            <Column title="WhatsApp" dataIndex="whatsApp" key="whatsApp" />
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
