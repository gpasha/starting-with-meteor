import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { ContactsCollections } from './ContactsCollection'

Meteor.methods({
  'contacts.insert'({name, email, imageUrl}) {
    check(name, String)
    check(email, String)
    check(imageUrl, String)
    if(!name) {
      throw new Meteor.Error('Name field is required!')
    }
    return ContactsCollections.insert({name, email, imageUrl, createdAt: new Date()})
  },
  'contacts.remove'({contactId}) {
    check(contactId, String)
    return ContactsCollections.remove(contactId)
  }
})