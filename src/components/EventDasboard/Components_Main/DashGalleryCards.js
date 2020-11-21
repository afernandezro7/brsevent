import React from 'react'
import { Empty } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { startDeletePoster } from '../../../redux/actions/posterActions'
import { GalleryCard } from '../../ui/GalleryCard'


export const DashGalleryCards = () => {

    const { posters } = useSelector(state => state.poster)
    const dispatch = useDispatch();

    const handleDeletePoster =( posterId )=>{

        dispatch(startDeletePoster(posterId));

    }

    return (
        <>
            <div className="bs-example widget-shadow">            
                <div className="card">
                    <div className="card-header">
                        <h2 className="text-secundary title1">Administar Poster:</h2> 

                        <div className="row">
                            {   posters.length>0
                                    ?   (posters.map( poster =>(
                                            <div 
                                                className="channel-card col-sm-12 col-md-6 my-2"
                                                key={poster.id}                                       
                                            >                                   
                                                <GalleryCard
                                                    isLoaded={true}
                                                    urlImg={poster.img}
                                                    cardTitle={poster.title}
                                                    formAlt={poster.alt}
                                                    cardInfo={poster.info}
                                                    action={true}
                                                    actionName='Eliminar'
                                                    onBntClick={ ()=>handleDeletePoster(poster.id) }
                                                />
                                            </div>
                                            
                                        )))
                                        
                                    :   <Empty 
                                            image={Empty.PRESENTED_IMAGE_SIMPLE} 
                                            className="col-md-12"
                                        />

                            }
                        </div>


                    </div>    
                </div>
            </div>
        </>
    )
}


                            
