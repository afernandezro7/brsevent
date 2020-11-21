import React, { useState } from 'react'
import { UploadPics } from '../../ui/UploadPics'
import { GalleryCard } from '../../ui/GalleryCard';
import { useForm } from '../../../hooks/useForm';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { startAddNewPoster } from '../../../redux/actions/posterActions';

const fornImageInitialState = {
    isLoaded: false,
    imgFile:'',
    tempUrl: null
}

export const DashGalleryForm = () => {

    const [formImage, setimageValue] = useState(fornImageInitialState)
    const {imgFile,isLoaded, tempUrl} = formImage

    const [formvalues, handleInputChange, reset] = useForm({
        formTitle: '',
        formAlt: '',
        formInfo: '',
    })
    const {formTitle, formAlt, formInfo} = formvalues

    const dispatch = useDispatch();

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        
        //TODO: VALIDAR
        if(formTitle.trim()==="" || formAlt.trim()==="" || formAlt.trim()==="" || !isLoaded){
            Swal.fire('Error','Debe llenar todos los campos y la imagen es obligatoria', 'error')
            return
        }

        //Registrar Poster
        const newPoster={
            archive: imgFile,
            title: formTitle,
            alt: formAlt,
            info: formInfo

        }

        dispatch(startAddNewPoster(newPoster))
        // Reset forms
        reset()
        setimageValue(fornImageInitialState)

    }

    return (
        <>
            <div className="bs-example widget-shadow">
                <div className="card">
                    <div className="card-header">
                        <h2 className="text-secundary title1">Crear Poster:</h2>   
                        <form
                            onSubmit={ handleFormSubmit }
                            className="row needs-validation"
                            noValidate
                        >   
                            <div className="col-md-7 col-sm-12 justify-content-center pb-3">
                                <GalleryCard
                                    isLoaded={isLoaded}
                                    urlImg={tempUrl}
                                    cardTitle={formTitle}
                                    formAlt={formAlt}
                                    cardInfo={formInfo}                                    
                                />
                            </div>
                            <div className="col-md-5 col-sm-12">
                                
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder="Título"
                                        name= "formTitle"
                                        value= { formTitle }
                                        onChange= { handleInputChange }                               
                                    />
                                    <div className="invalid-feedback">
                                        El campo de Nombre no puede estar vacío
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder="Texto Alternativo"
                                        name= "formAlt"
                                        value= {formAlt}
                                        onChange= { handleInputChange }                               
                                    />
                                    <div className="invalid-feedback">
                                        El campo de Nombre no puede estar vacío
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder="Descripción"
                                        name= "formInfo"
                                        value= {formInfo}
                                        onChange= { handleInputChange }                               
                                    />
                                    <div className="invalid-feedback">
                                        El campo de Nombre no puede estar vacío
                                    </div>
                                </div>
                                <UploadPics
                                    formImage={formImage}
                                    setimageValue={setimageValue}
                                />
                                <div className="form-group mt-4">
                                    <input 
                                        type="submit" 
                                        className="btn btn-outline-dark btn-block" 
                                        value="Crear Poster" 
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            
            </div>
        </>
    )
}
