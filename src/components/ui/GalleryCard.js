import React from 'react'
import { Empty } from 'antd';
import { Card, Button } from 'antd';


const { Meta } = Card;

export const GalleryCard = ( { isLoaded, urlImg , cardTitle, formAlt, cardInfo, action=false, actionName, onBntClick, cardClick } ) => {


    return (
        <>
            <Card

                hoverable
                cover={
                    isLoaded
                        ?<img alt={formAlt} src={urlImg} />
                        :<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                }
                onClick={ cardClick }
            >
                <Meta 
                    title={`Título: ${cardTitle}`} 
                    description={`Descripción: ${cardInfo}`}                     
                />
                
                {
                    action
                        && 
                        <Button 
                            className="mt-3 float-right"
                            type="link" 
                            danger
                            onClick={ onBntClick }
                        >
                            {actionName}
                        </Button>
                        
                }
            </Card>
            
        </>
    )
}
