import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { startLogin } from '../../redux/actions/authActions'

export const LoginForm = () => {

    const [formvalues, handleInputChange] = useForm({
        email: 'anabelsg9@gmail.com',
        password:'123456'
    })
    const { email , password }= formvalues
    
    const dispatch = useDispatch()

    const handleSubmit = e =>{
        e.preventDefault();
        
        //TODO: VALIDAR CAMPOS opcional Backend hay validación

        //Login
        dispatch(startLogin(email, password))
    }

    return (      
        <form 
            className="signin-form"
            onSubmit={ handleSubmit }
        >
            <div className="form-input">
                <span className="fa fa-envelope" aria-hidden="true"></span>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    required="required"
                    value= { email }
                    onChange= { handleInputChange }
                />
            </div>
            <div className="form-input">
                <span className="fa fa-key" aria-hidden="true"></span>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña" 
                    required="required"
                    value= { password }
                    onChange= { handleInputChange }
                />
            </div>
            <div className="login-remember d-grid">
                <label className="check-remaind">
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                    <p className="remember">Recordarme</p>
                </label>
                <button className="btn theme-button">Iniciar</button>
            </div>
        </form>
    )
}
