import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { startDeleteChannel } from '../../redux/actions/chActions'

export const ChannelCard = ({channel}) => {

    const dispatch = useDispatch()

    const handleDelete = ()=>{
        dispatch(startDeleteChannel(channel.id))
    }

    return (
        <>
        <div className="channel-card col-sm-12 col-md-6 col-xl-4">

            <div className="stats-info widget-shadow">
                <div className="stats-info-agileits m-2">

                    <header className="widget-header ">
                        <h4 className="widget-title text-center pt-2">{channel.title}</h4>
                    </header>
                    <hr className="widget-separator"/>

                    <div className="stats-body">
                        <ul className="info">
                            <li className="col-md-12">
                                <b>PONENTES</b>
                                {
                                    channel.speakers.map( speaker => (
                                        <p 
                                            key={speaker.id}
                                        >
                                            {speaker.name}
                                        </p>
                                    ))
                                }
                               
                            </li>
                            <li className="col-md-12">
                                <b>Descripción</b>
                                <p>{ channel.description }</p>
                            </li>
                            <li className="col-md-12">
                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick ={ handleDelete }
                                >
                                Borrar</button>
                            </li>
                            <div className="clearfix"></div>
                        </ul>
                    </div>
                </div> 
            </div>
        </div>
              
        </>
    )
}



ChannelCard.propTypes = {
    channel: PropTypes.object.isRequired
}

