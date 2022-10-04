
export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {
        contacts.map(({name, email, phone}) => (
          <div key={name} className="contact-info-container">
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
