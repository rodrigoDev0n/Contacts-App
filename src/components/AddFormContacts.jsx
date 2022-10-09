import { useRef, useState } from "react";
import { colors } from "../helpers/colors";
import { useForm } from "../hooks/useForm";
import { backgrounds } from "../helpers/backgrounds";

export const AddFormContacts = ({ onNewContact }) => {

    const {
         name, 
         email, 
         phone,
         customb,
         nameInput,
         emailInput,
         phoneInput,
         customBackground,
         resetForm, 
    } = useForm()

    const nameRef = useRef()
    const emailRef = useRef()
    const numberRef = useRef()
    const selectedColor = useRef()
    const custom = useRef()
    let background = colors[0]
    let backgroundImage = custom

    const onSubmitForm = (event) => {
        if (custom.current.value.length > 1) {
            backgroundImage = custom.current.value
        }
        console.log(backgroundImage);
        event.preventDefault()
        console.log('Enviando datos');
        const contact = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: numberRef.current.value,
            color: background,
            image: backgroundImage,
        }
        onNewContact(contact)
        resetForm()
    }

    const handleSelectColor = (color) => {
        background = color
        console.log(background);
    }

    const handleSelectBackground = (backimage) => {
        backgroundImage = backimage
        console.log(backgroundImage);
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
                    <div className="backgrounds-selection-container">
                        {
                            backgrounds.map(b => (
                                <div key={b} onClick={() => handleSelectBackground(b)}>
                                    <img className="backgrounds-imgs" src={b} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="form_input-container">
                        <input 
                            onChange={customBackground}
                            value={customb}
                            ref={custom} 
                            type="text" 
                            name="" 
                            placeholder="Añade un custom background" 
                        />
                    </div>
                    <button className="add-button" type="submit">Añadir</button>
                </form>
            </div>
        </>
    )
}
