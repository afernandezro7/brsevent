import React from 'react'
import { LoginForm } from './LoginForm'
import './css/bootstrapv4.css'
import './LoginStyle.css'


export const LoginScreen = () => {
    return (
        <div className="form-36-mian section-gap">
            <div className="wrapper">
                <div className="form-inner-cont">
                    <h3>Iniciar Sesión</h3>

                    <LoginForm/>

                    <p className="signup">No te haz registrado aún?
                        <a href="#signup.html" className="signuplink">Ofertas</a>
                    </p>
                </div>


                <div className="copy-right">
                    <p>&copy; 2017 BRS-Content. All Rights Reserved | Design by Belraysa I+D Group</p>
                </div>

            </div>
        </div>

    )
}
