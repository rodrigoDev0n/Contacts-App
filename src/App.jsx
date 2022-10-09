import { AddFormContacts, Contacts } from "./components/components";
import { useContacts } from "./hooks/useContacts";
import { NoContacts } from "./components/components";

export const App = () => {

  const { contact, handleNewContact, onDeleteContact } = useContacts()

  return (
    <>
        <div className="main-container">
            <div className="contacts-container">
                {
                  contact.length === 0
                  ? <NoContacts />
                  : <Contacts contacts={contact} onDeleteContact={onDeleteContact} />
                }
            </div>
            <div className="add-contacts-form">
                <AddFormContacts onNewContact={handleNewContact} />
            </div>
        </div>
    </>
  )
}
