import React from 'react'
import { Empty } from 'antd';
import { Card, Button } from 'antd';


const { Meta } = Card;

export const GalleryCard = ( { isLoaded, urlImg , cardTitleName="Título" ,cardTitle, formAlt, cardInfoName="Descripción",cardInfo, action=false, actionName, onBntClick, cardClick } ) => {


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
                    title={`${cardTitleName}: ${cardTitle}`} 
                    description={`${cardInfoName}: ${cardInfo}`}                     
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
