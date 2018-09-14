import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <span className="text-danger">
                <h1 className="display-4 mb-2">Contact List</h1>
              </span>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

export default Contacts;
