import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GalleryCard } from '../../ui/GalleryCard'
import { Empty, Modal } from 'antd';
import { posterSetActiveAction, posterUnSetActiveAction } from '../../../redux/actions/posterActions';


export const PosterGalleryScreen = () => {

    const { posters, activePoster } = useSelector(state => state.poster)
    const dispatch = useDispatch();

    const [modalVisible, setmodalVisible] = useState(false)

    const getPoster = (posterID)=>{
        dispatch(posterSetActiveAction(posterID));
        setmodalVisible(true)
    }

    const handleOkModal=()=>{
        setmodalVisible(false)
        dispatch(posterUnSetActiveAction());
    }
    
    return (
        <>
            <h2 className="title1 text-center">Posters del Evento</h2>

            <div className="bs-example widget-shadow">            
                <div className="card">
                    <div className="card-header">
                        

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
                                                    cardClick={()=>getPoster(poster.id)}
                                                />
                                            </div>
                                            
                                        )))
                                        
                                    :   <Empty 
                                            image={Empty.PRESENTED_IMAGE_SIMPLE} 
                                            className="col-md-12"
                                        />

                            }
                        </div>


                        <Modal
                            title="Poster del Evento"       
                            width={600}
                            centered
                            visible={modalVisible}
                            onOk={handleOkModal}
                            onCancel={handleOkModal}
                        >
                            {
                                !!activePoster
                                    &&
                                    <GalleryCard
                                        isLoaded={true}
                                        urlImg={activePoster.img}
                                        cardTitle={activePoster.title}
                                        formAlt={activePoster.alt}
                                        cardInfo={activePoster.info}
                                    />     
                            }
                        </Modal>
                    </div>    
                </div>
            </div>

        </>
    )
}
