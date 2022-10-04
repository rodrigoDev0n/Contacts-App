import { NoContacts } from "./components"

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {
        contacts.length === 0
          ? <NoContacts />
          : contacts.map(({ name, email, phone, color }) => (
              <div key={name} className="contact-info-container" style={{ background: `${color}` }}>
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{phone}</p>
                <button onClick={() => onDeleteContact(email)}>Eliminar</button>
              </div>
            ))
      }
    </div>
  )
}
