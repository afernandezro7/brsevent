import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MultiSelector } from '../../ui/MultiSelector';
import { useForm } from '../../../hooks/useForm'
import { startAddNewChannel } from '../../../redux/actions/chActions';

export const DashConfigChannels = () => {

    const { speakers } = useSelector( state => state.speaker );
    const dispatch = useDispatch()

    const [formvalues, handleInputChange, reset] = useForm({
        channelTitle: '',
        channelSRC: '',
        channelDescription : ''
    })
    const {channelTitle, channelSRC, channelDescription } = formvalues   
    const [multiSelectValue, setselectValue] = useState([])

    const [isValidForm, setIsValidForm] = useState(true)

    const handleFormSubmit = e =>{
        e.preventDefault();

        //TODO VALIDAR
        //Validar formvalues
        if(channelTitle.trim()==='' || channelSRC.trim()==='' || channelDescription.trim()==='' || multiSelectValue.length ===0){
            setIsValidForm( false )
            return
        }

        //TODO REGISTRAR CHANNEL

        const channelCreated = {
            title: channelTitle,
            streamSrc: channelSRC,
            description: channelDescription,
            speakers: multiSelectValue
        }

       dispatch(startAddNewChannel(channelCreated))

       // Reset forms Values
       reset()
       setselectValue([])
    }

    return (
        <>
            <div className="bs-example widget-shadow">
                <div className="card">

                    <div className="card-header">

                        <h2 className="text-secundary title1">Registrar Salas:</h2>   

                        <form
                            onSubmit={ handleFormSubmit }
                            className="row justify-content-end needs-validation"
                            noValidate
                        >
                            <div className="col-md-10">

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`${ (isValidForm || !!channelTitle) ? 'form-control' : 'form-control is-invalid'}`}
                                        placeholder="Nombre de la Sala"
                                        name= "channelTitle"
                                        value= { channelTitle }
                                        onChange= { handleInputChange }                               
                                    />
                                    <div className="invalid-feedback">
                                        El campo T??tulo no puede estar vac??o
                                    </div>
                                </div>
                            
                            
                            
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={`${ (isValidForm || !!channelSRC) ? 'form-control' : 'form-control is-invalid'}`}
                                        placeholder="Streaming Ej:[https://www.youtube.com/watch?v=YbKhyMbKSrQ]"
                                        name= "channelSRC"
                                        value= { channelSRC } 
                                        onChange= { handleInputChange }                                   
                                    />
                                    <div className="invalid-feedback">
                                        La Fuente de Streaming no puede estar vac??a
                                    </div>
                                </div>
                            
                            
                                <div className="form-group">

                                    <MultiSelector
                                        data ={ speakers }
                                        placeholder = "Ponentes"
                                        reciveValue = { setselectValue }
                                    />
                                    <div 
                                        className={`${ (isValidForm || multiSelectValue.length !==0) ? 'd-none' : 'd-block text-danger '}`}
                                        style={{fontSize:'80%'}}
                                    >
                                        Debe introducir al menos un Ponente
                                    </div>
                                </div>
                            
                            
                                <div className="form-group">
                                    <textarea
                                        className={`${ (isValidForm || !!channelDescription) ? 'form-control' : 'form-control is-invalid'}`}
                                        placeholder="Descripci??n de la Conferencia"
                                        name= "channelDescription"
                                        value={ channelDescription } 
                                        onChange= { handleInputChange }    
                                    >
                                    </textarea>
                                    <div className="invalid-feedback">
                                        El campo de Descripci??n no puede estar vac??o
                                    </div>
                                </div>

                            </div>


                            <div className="col-md-2">
                                <div className="form-group">
                                    <input 
                                        type="submit" 
                                        className="btn btn-outline-dark" 
                                        value="+" 
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
