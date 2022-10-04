import { useRef, useState } from "react";
import { colors } from "../helpers/colors";
import { useForm } from "../hooks/useForm";

export const AddFormContacts = ({ onNewContact }) => {

    const {
         name, 
         email, 
         phone,
         nameInput,
         emailInput,
         phoneInput,
         resetForm, 
    } = useForm()

    const nameRef = useRef()
    const emailRef = useRef()
    const numberRef = useRef()
    const selectedColor = useRef()
    let background = colors[0]

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log('Enviando datos');
        const contact = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: numberRef.current.value,
            color: background,
        }
        onNewContact(contact)
        resetForm()
    }

    const handleSelectColor = (color) => {
        background = color
        console.log(background);
    }

    return (
        <>
            <div className="title-container">
                <h1>Añade Un Contacto...</h1>
            </div>
            <div className="form-container">
                <form onSubmit={onSubmitForm}>
                    <div className="form_input-container">
                        <input 
                            onChange={nameInput} 
                            value={name} 
                            ref={nameRef} 
                            type="text" 
                            placeholder="Nombre contacto" 
                        />
                    </div>
                    <div className="form_input-container">
                        <input
                            onChange={emailInput}
                            value={email} 
                            ref={emailRef} 
                            type="email" 
                            name="" 
                            id="" 
                            placeholder="Ingresa un email" 
                        />
                    </div>
                    <div className="form_input-container">
                        <input
                            onChange={phoneInput}
                            value={phone} 
                            ref={numberRef} 
                            type="number" 
                            name="" 
                            id="" 
                            placeholder="Ingresa un numero telefonico" 
                        />
                    </div>
                    <div className="colors-box-selection-container">
                        {
                            colors.map(c => (
                                <span
                                    id={c}
                                    ref={selectedColor}
                                    key={c}
                                    onClick={() => handleSelectColor(c)}
                                    className="colors-container"
                                    style={{ background: `${c}`, fontSize: 0 }}
                                >{c}</span>
                            ))
                        }
                    </div>
                    <button className="add-button" type="submit">Añadir</button>
                </form>
            </div>
        </>
    )
}
