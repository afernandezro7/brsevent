import React from 'react'
import { Select } from 'antd';

const { Option } = Select;



export const MultiSelector = ({data, placeholder, reciveValue}) => {

    const handleChange = (arrayOfKeys)=>{
        const dataSelected = arrayOfKeys.map(key => (
            data.find( element => element.id === key)
            
        ))

        reciveValue(dataSelected);
    }

    return (
        <>
            <Select 
                mode="tags" 
                style={{ width: '100%' }} 
                placeholder={ placeholder }
                onChange={handleChange}
                >
                {
                    data.map( (el) => 
                        (<Option key={el.id} >{el.name}</Option>)
                    )
                }
            </Select>
        </>
    )
}
