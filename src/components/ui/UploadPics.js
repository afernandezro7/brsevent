import React from 'react'
import './uploadPics.css'

//fatherComponent
// const [formImage, setimageValue] = useState({
//     isLoaded: false,
//     imgFile:'',
//     tempUrl: null
// })


export const UploadPics = ({formImage, setimageValue}) => {

    
    const { isLoaded, imgFile } = formImage

    const handleClick = ()=>{
        document.querySelector('#avatarPicture').click()
    }

    const handleFileChange= e =>{
        const file= e.target.files[0]   
        const objectURL = URL.createObjectURL(file)

        if(file){

            setimageValue({
                isLoaded: true,
                imgFile: file,
                tempUrl: objectURL
            })
        }
        
    }

    return (
        <>
            <input
                id="avatarPicture"
                type="file"
                name="file"
                style={{display:"none"}}
                onChange={ handleFileChange }
            />
            <div 
                className="dropzone"
                onClick = { handleClick }
            >
                {
                    isLoaded
                    ? imgFile.name
                    :<><i className="fa fa-cloud-upload"></i> Cargar Imagen</>                 
                }
            </div>
        </>
    )
}







