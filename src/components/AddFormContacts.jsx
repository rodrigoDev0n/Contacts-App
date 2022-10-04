import { useRef } from "react";

export const AddFormContacts = ({onNewContact}) => {

    const name = useRef()
    const email = useRef()
    const number = useRef()

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log('Enviando datos');
        const contact = {
            name: name.current.value,
            email: email.current.value,
            phone: number.current.value,
        }
        onNewContact(contact)
    }

    return (
        <div className="form-container">
            <form onSubmit={onSubmitForm}>
                <div>
                    <input ref={name} type="text" placeholder="Nombre contacto" />
                </div>
                <div>
                    <input ref={email} type="email" name="" id="" placeholder="Ingresa un email" />
                </div>
                <div>
                    <input ref={number} type="number" name="" id="" placeholder="Ingresa un numero telefonico" />
                </div>
                <button type="submit">Añadir</button>
            </form>
        </div>
    )
}
