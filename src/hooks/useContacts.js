import { useEffect, useReducer } from "react"
import { contactReducer } from "../contactReducer"

export const useContacts = () => {
  
    const initialState = []
    const init = () => {
        return JSON.parse(localStorage.getItem('contact')) || []
    }

    const [contact, dispatch] = useReducer(contactReducer, initialState, init)
    
    useEffect(() => {
      localStorage.setItem('contact', JSON.stringify(contact))
    }, [contact])
    

    const handleNewContact = (contact) => {
        dispatch({
            type: '[CONTACT] Add Contact',
            payload: contact,
        })
        console.log({contact});
    }

    const onDeleteContact = (email) => {
        dispatch({
            type: '[CONTACT] Delete Contact',
            payload: email,
        })
        console.log('hola');
    }


    return {
        contact,
        handleNewContact,
        onDeleteContact,
    } 
}
