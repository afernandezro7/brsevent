import React from 'react'
import { useSelector } from 'react-redux'

export const AsideChannelSelector = ({channelsTag,channelActive,setchannelActive,handleSelectChannel}) => {

    const { channels } = useSelector(state => state.channel)

    return (
        <li 
            className= { (channelActive || channelsTag) ? "treeview active" : "treeview" }
            onClick={ ()=> setchannelActive(!channelActive)}
        >
            <div className="anchor-div">
              <i className="fas fa-video pr-2"></i>
              <span>Salones</span>
              <small className="label pull-right label-info">{channels.length}</small>
            </div>
            <ul className="treeview-menu menu-open">

                {
                    channels.map(ch =>(
                      <li 
                        key={ch.id}
                        onClick={ ()=> handleSelectChannel(ch) }
                      >
                        <div className="anchor-div">
                          <i className="fa fa-video"></i>{ch.title}
                        </div>
                      </li>
                    ))
                }
                  
            </ul>
        </li>
    )
}
