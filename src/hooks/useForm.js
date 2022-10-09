
import { useState } from "react"

export const useForm = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [customb, setcustomb] = useState('')

  const nameInput = ({target}) => setname(target.value)

  const emailInput = ({target}) => setemail(target.value)

  const phoneInput = ({target}) => setphone(target.value)

  const customBackground = ({target}) => setcustomb(target.value)

  const resetForm = () => {
    setname('')
    setemail('')
    setphone('')
    setcustomb('')
  }


  return {
    name,
    email,
    phone,
    customb,
    nameInput,
    emailInput,
    phoneInput,
    customBackground,
    resetForm,
  }
}
