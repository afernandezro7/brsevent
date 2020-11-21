import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../../hooks/useForm'
import validator from 'validator'
import { startAddNewUser } from '../../../redux/actions/userActions'

const userFormInitialState = {
    registerUser: '',
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmation: '',
    registerRole: 'USER_ROLE'

}



export const DashRegister = () => {

    const dispatch = useDispatch()
    

    const [formvalues, handleInputChange, reset] = useForm(userFormInitialState)
    const {registerUser, registerName, registerEmail, registerPassword, registerConfirmation, registerRole} = formvalues
    
    const [isValidForm, setIsValidForm] = useState(true)

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        
        //Validar formvalues
        if(registerUser.trim()==='' || registerName.trim()==='' || registerEmail.trim()==='' || registerPassword.trim()==='' || registerConfirmation.trim()==='' || registerRole.trim()==='' || !validator.isEmail(registerEmail.trim()) || registerPassword.trim()!== registerConfirmation.trim()){
            setIsValidForm( false )
            return
        }


        // Registrar Ponente
        setIsValidForm( true )
        dispatch(startAddNewUser({
            name: registerName,
            userName: registerUser,
            email: registerEmail,
            password: registerPassword,
            role: registerRole
        }))

        //Reset form
        reset()
    }


    return (
        <>
            <div className="bs-example widget-shadow">

                <div className="card">
                    <div className="card-header">
                        <h2 className="text-secundary title1">Registro de Usuarios</h2>

                        <form
                            onSubmit={ handleFormSubmit }
                            className="needs-validation" 
                            noValidate
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className={`${ (isValidForm || !!registerUser) ? 'form-control' : 'form-control is-invalid'}`}
                                    placeholder="Usuario"
                                    name= "registerUser" 
                                    value= { registerUser }    
                                    onChange={ handleInputChange }  
                                    
                                />
                                <div className="invalid-feedback">
                                    El campo de Usuario no puede estar vacío
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className={`${(isValidForm || !!registerName) ? 'form-control' : 'form-control is-invalid'}`}
                                    placeholder="Nombre Completo"
                                    name= "registerName"  
                                    value= { registerName }    
                                    onChange={ handleInputChange } 
                                                                  
                                />
                                <div className="invalid-feedback">
                                    El campo de Nombre no puede estar vacío
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className={`${(isValidForm || validator.isEmail(registerEmail)) ? 'form-control' : 'form-control is-invalid'}`}
                                    placeholder="Correo"
                                    name= "registerEmail"
                                    value= { registerEmail }    
                                    onChange={ handleInputChange }
                                    
                                />
                                <div className="invalid-feedback">
                                    Debe introducir un email válido
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className={`${(isValidForm || (!!registerPassword && registerPassword.length > 5) ) ? 'form-control' : 'form-control is-invalid'}`}
                                    placeholder="Contraseña"
                                    name= "registerPassword"
                                    value= { registerPassword }    
                                    onChange={ handleInputChange }
                                    
                                />
                                <div className="invalid-feedback">
                                    La contraseña debe tener 6-20 caracteres
                                </div>
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    className={`${(isValidForm || (!!registerConfirmation && registerConfirmation.length > 5 && registerConfirmation === registerPassword) ) ? 'form-control' : 'form-control is-invalid'}`}
                                    placeholder="Repita la contraseña"
                                    name= "registerConfirmation"
                                    value= { registerConfirmation }    
                                    onChange={ handleInputChange }
                                    
                                />
                                <div className="invalid-feedback">
                                    No coinciden las contraseñas
                                </div>
                            </div>

                            <div className="form-group">
                                <select
                                    className={`${ (isValidForm || !!registerRole) ? 'form-control custom-select' : 'form-control custom-select is-invalid'}`}
                                    name= "registerRole"
                                    value= { registerRole }    
                                    onChange={ handleInputChange }
                                    
                                >
                                    <option disabled value="">-- Seleccione Role --</option>
                                    <option value="USER_ROLE">Invitado</option>
                                    <option value="ADMIN_ROLE">Administrador</option>
                                </select>
                                <div className="invalid-feedback">
                                    Debe introducir un role válido
                                </div>
                            </div>

                            <div className="form-group">
                                <input 
                                    type="submit" 
                                    className="btn btn-outline-dark float-right" 
                                    value="Crear cuenta" 
                                />
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
