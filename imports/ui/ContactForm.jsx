import React, { useState } from 'react'
import { ContactsCollections } from '../api/ContactsCollection'

export const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const saveContact = () => {
    console.log({name, email, imageUrl});
    ContactsCollections.insert({name, email, imageUrl})
    setName('')
    setEmail('')
    setImageUrl('')
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input id='name'
                 type='text'
                 value={name}
                 onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email'
                 type='email'
                 value={email}
                 onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='imageUrl'>Image URL</label>
          <input id='imageUrl'
                 type='text'
                 value={imageUrl}
                 onChange={e => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <button type='button'
                  onClick={saveContact}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}