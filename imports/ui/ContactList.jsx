import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { ContactsCollections } from '../api/ContactsCollection'

export const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactsCollections.find({}).fetch()
  })
    
  return (
    <div>
      <h1>Contact List: </h1>
      <ul>
        {!!contacts && contacts.map(contact => (
          <li key={contact._id}>{contact.name} - {contact.email}</li>
        ))}
      </ul>
    </div>
  )
}
