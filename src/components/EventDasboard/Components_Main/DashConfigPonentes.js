import React, { useState } from 'react'
import validator from 'validator'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './dashConfigPonentes.css'


import { useDispatch } from 'react-redux'
import { useForm } from '../../../hooks/useForm'
import { UploadPics } from '../../ui/UploadPics'
import { startAddNewSpeaker } from '../../../redux/actions/speakerActions'



export const DashConfigPonentes = () => {

    const [formvalues, handleInputChange] = useForm({
        formName: 'Armando Casas',
        formUser: 'Armando',
        formEmail: 'arnansdfsdfdezo7@gmail.com',
        formTitle: 'Constructor',
        formPassword: '123456',
        formPassword2: '123456',
        formTopic: 'Educación Física',
        formCountry: 'Cuba'
    })
    const {formName,formUser,formEmail, formTitle,formPassword, formTopic, formCountry, formPassword2} = formvalues

    const [formWhatsapp, setformWhatsapp] = useState('+5352345432')

    const [formImage, setimageValue] = useState({
        isLoaded: false,
        imgFile:'',
        tempUrl: null
    })
    const {imgFile, tempUrl} = formImage

    const dispatch = useDispatch();

    const [isValidForm, setIsValidForm] = useState(true)

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        
        //Validar formvalues
        if(formName.trim()==='' || formUser.trim()==='' || !validator.isEmail(formEmail.trim()) || formTitle.trim()==='' || formPassword.trim()!==formPassword2.trim()  || formTopic.trim()==='' || formCountry.trim()==='' || formWhatsapp === undefined || formWhatsapp.length <= 9){
            setIsValidForm( false )
            return
        }

             
        //console.log(imgFile);
        dispatch(startAddNewSpeaker({
            name: formName,
            title: formTitle,
            country: formCountry,
            topic: formTopic,
            whatsApp: formWhatsapp,
            usuario:{
                name: formName,
                userName: formUser,
                password: formPassword,
                email: formEmail,
                img: imgFile.name || '',
                role: "USER_ROLE"  
            }
        }))

      
    }

    return (
        <>
            <div className="bs-example widget-shadow">
                <div className="card">
                    <div className="card-header">
                        <h2 className="text-secundary title1">Registrar Ponentes:</h2>

                        <form
                            onSubmit={ handleFormSubmit }
                            className="row justify-content-end needs-validation"
                            noValidate
                        >
                            <div className="col-md-5 col-sm-12">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`${ (isValidForm || !!formName) ? 'form-control' : 'form-control is-invalid'}`}
                                        placeholder="Nombre"
                                        name= "formName"
                                        value= {formName}
                                        onChange= { handleInputChange }                               
                                    />
                                    <div className="invalid-feedback">
                                        El campo de Nombre no puede estar vacío
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`${ (isValidForm || !!formUser) ? 'form-control' : 'form-control is-invalid'}`}
                                        placeholder="Usuario [Ej: poner parte delantera del email]"
                                        name= "formUser"
                                        value={formUser} 
                                        onChange= { handleInputChange }                                 
                                    />
                                    <div className="invalid-feedback">
                                        El campo de Usuario no puede estar vacío
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`${(isValidForm || validator.isEmail(formEmail)) ? 'form-control' : 'form-control is-invalid'}`}
                                        placeholder="Correo"
                                        name= "formEmail"
                                        value={formEmail} 
                                        onChange= { handleInputChange }                                 
                                    />
                                    <div className="invalid-feedback">
                                        El campo de email debe ser válido
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`${(isValidForm || (!!formPassword && formPassword.length > 5) ) ? 'form-control' : 'form-control is-invalid'}`}
                                        placeholder="Contraseña"
                                        name= "formPassword"
                                        value={formPassword} 
                                        onChange= { handleInputChange }                                 
                                    />
                                    <div className="invalid-feedback">
                                        El campo de Contraseña debe ser mayor de 6 caracteres
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`${(isValidForm || (!!formPassword2 && formPassword2.length > 5 && formPassword2 === formPassword) ) ? 'form-control' : 'form-control is-invalid'}`}
                                        placeholder="Confirmación de contraseña"
                                        name= "formPassword2"
                                        value={formPassword2} 
                                        onChange= { handleInputChange }                                 
                                    />
                                    <div className="invalid-feedback">
                                        Las contraseñas no coinciden
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-5 col-sm-12">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`${ (isValidForm || !!formTitle) ? 'form-control' : 'form-control is-invalid'}`}
                                        placeholder="Título Ej: Master en Ciencias"
                                        name= "formTitle"
                                        value={formTitle} 
                                        onChange= { handleInputChange }                                 
                                    />
                                    <div className="invalid-feedback">
                                        El campo de Título no puede estar vacío
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`${ (isValidForm || !!formTopic) ? 'form-control' : 'form-control is-invalid'}`}
                                        placeholder="Tema de la Conferencia"
                                        name= "formTopic"
                                        value={formTopic} 
                                        onChange= { handleInputChange }                                 
                                    />
                                    <div className="invalid-feedback">
                                        El campo de Tema no puede estar vacío
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`${ (isValidForm || !!formCountry) ? 'form-control' : 'form-control is-invalid'}`}
                                        placeholder="País"
                                        name= "formCountry"
                                        value={formCountry} 
                                        onChange= { handleInputChange }                                 
                                    />
                                    <div className="invalid-feedback">
                                        El campo de País no puede estar vacío
                                    </div>
                                </div>
                                <div className="form-group">
                                    <PhoneInput
                                        international
                                        className={`${(isValidForm || (!!formWhatsapp && formWhatsapp.length >= 9) ) ? '' : 'is-invalid'}`}
                                        defaultCountry="CU"
                                        value={formWhatsapp}
                                        onChange={ setformWhatsapp }
                                    />
                                    <div className="invalid-feedback">
                                        Debe introducir un contácto válido
                                    </div>
                                    
                                </div>
                                
                                <UploadPics
                                    formImage={ formImage }
                                    setimageValue= { setimageValue }
                                />
                                
                            </div>


                            <div className="col-md-2 col-sm-12">
                               

                                <div className="form-group">
                                    <input 
                                        type="submit" 
                                        className="btn btn-outline-dark" 
                                        value="+" 
                                    />
                                </div>
                                
                                {
                                    !!tempUrl 
                                        &&(
                                            <img
                                                alt='avatar'
                                                src={ tempUrl }
                                                style={{
                                                    maxWidth: 80,
                                                    maxHeight: 80,

                                                }}
                                            />
                                        )
                                }
                                

                            </div>
                        </form>


                    </div>
                </div>
            </div>

        </>
    )
}

