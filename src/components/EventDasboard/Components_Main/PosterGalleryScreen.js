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

    const handleCancelModal=()=>{
        setmodalVisible(false)
        dispatch(posterUnSetActiveAction());
    }

    const handleDownload=(url)=>{        
       // window.open(url)
        let link = document.createElement("a");
        link.download = "poster_cubamotricidad"; 
        
        fetch(url)
        .then(res => res.blob()) // Gets the response and returns it as a blob
        .then(blob => {
            link.href = URL.createObjectURL(blob);
            link.click();
            URL.revokeObjectURL(link.href);


        }).catch(err=> alert('intente nuevamente'))

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
                                                    formAlt={poster.alt}
                                                    meta={false}
                                                    //cardTitle={poster.title}
                                                    //cardInfo={poster.info}
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
                            onCancel={handleCancelModal}
                            onOk={()=>handleDownload(activePoster.img)}
                            okText={<i className="fa fa-download"></i>}
                        >
                            {
                                !!activePoster
                                    &&
                                    <GalleryCard
                                        isLoaded={true}
                                        urlImg={activePoster.img}
                                        formAlt={activePoster.alt}
                                        meta={false}
                                        //cardTitle={activePoster.title}
                                        //cardInfo={activePoster.info}
                                    />     
                            }
                        </Modal>
                    </div>    
                </div>
            </div>

        </>
    )
}
