import React from 'react'
import 'antd/dist/antd.css';
import { Collapse, Empty } from 'antd';
import { useSelector } from 'react-redux';

const { Panel } = Collapse;


export const InfoDescripcion = () => {

    const { channels } = useSelector(state => state.channel)

    const descriptions= channels.map( channel =>(
        {
            id: channel.id,
            title: channel.title,
            descripcion: channel.description
        }
    ))




    return (
        <>
            <div className="bs-example widget-shadow">

                <div className="card">
                    <div className="card-header">
                        <h2 className="text-secundary title1">Descripción:</h2>
                    
                    </div>
                    <div className="card-body">
                        {
                            descriptions.length>0
                                ?   
                                (   <Collapse accordion>
                                    {
                                        descriptions.map( (desc , i) => (

                                        <Panel header={ desc.title } key={i+1}>
                                        <p>{desc.descripcion}</p>
                                        </Panel>
                                        ))
                                    }
                                    </Collapse>
                                )
                                :   <Empty 
                                        image={Empty.PRESENTED_IMAGE_SIMPLE} 
                                        className="col-md-12"
                                    />
                        }
                    
                    </div>
                </div>
            </div>
        </>
    )
}
