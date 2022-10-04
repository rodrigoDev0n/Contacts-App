
import { useState } from "react"

export const useForm = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')

  const nameInput = ({target}) => setname(target.value)

  const emailInput = ({target}) => setemail(target.value)

  const phoneInput = ({target}) => setphone(target.value)

  const resetForm = () => {
    setname('')
    setemail('')
    setphone('')
  }


  return {
    name,
    email,
    phone,
    nameInput,
    emailInput,
    phoneInput,
    resetForm,
  }
}
