import { Meteor } from 'meteor/meteor'
import { ContactsCollections } from './ContactsCollection'

Meteor.publish('allContacts', function publichAllContacts() {
  return ContactsCollections.find()
});