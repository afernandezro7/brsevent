import React from 'react'
import { Empty } from 'antd';
import { useSelector } from 'react-redux'
import { ChannelCard } from '../../ui/ChannelCard'

export const DashConfigChannelCards = () => {

    const {channels} = useSelector( state => state.channel );

    return (
        <>

            <div className="bs-example widget-shadow">
                <div className="card">
                    <div className="card-header">
                        <h2 className="text-secundary title1">Salas registradas</h2> 

                            {   
                                channels.length>0
                                    ?
                                        channels.map( channel =>(
                                            <ChannelCard
                                                key= { channel.id}
                                                channel= { channel }
                                            />
                                        ))
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
                   
                    
                    
                    
                    
                    
                    
                    
                    
                    