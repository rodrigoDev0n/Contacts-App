import { useState } from "react"
import { NoContacts } from "./components"
import { Modal } from "./components"

export const Contacts = ({ contacts, onDeleteContact }) => {

  const [show, setshow] = useState({
    isShow: false,
  })

  const showContactData = (name, email, phone, option) => {
    console.log(name);
    setshow({
      isShow: option,
      name,
      email,
      phone
    })

  }

  return (
    <div className="contacts-main-info-container">
      {contacts.map(({ name, email, phone, color, image }) => (
        <div key={name} className="info-container-contact">
          <div className="background-container">
            <img src={image} alt="" />
          </div>
          <div className="info-container" style={{ background: `${color}` }}>
            <div>
              <h3>{name}</h3>
            </div>
            <div className="options-container">
              <button onClick={() => onDeleteContact(email)}>Eliminar</button>
              <button onClick={() => showContactData(name, email, phone, true)}>Mostrar contacto</button>
            </div>
          </div>
        </div>
      ))
      }
      <Modal show={show} contact={contacts} onClose={showContactData} />
    </div>
  )
}

{/* <div key={name} className="contact-info-container" style={{ background: `${color}` }}>
<div className="flex-user-data-container">
  <div className="user-img-container"></div>
  <div className="name-container">
    <div>
      <h3>{name}</h3>
    </div>
  </div>
</div>
<div className="options-container">
  <button onClick={() => onDeleteContact(email)}>Eliminar</button>
  <button onClick={() => showContactData(name, email, phone, true)}>Mostrar contacto</button>
</div>
</div> */}
