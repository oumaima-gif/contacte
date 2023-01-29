import React from 'react';
import Contactpage from './Contactpage';
import AddContact from './AddContact';

 class Contact extends React.Component {
      constructor(props){
        super(props);
        this.state={
          contacts: [
              { Name: "samadi",
               Phone:9896835,
               ville: "Tager",
             },
             {Name: "lina",
             Phone: 98765342,
             ville: "Rabat",
             },
             {
               Name:"roeya",
               Phone:98609435,
               ville: "Tmara",
             },
          ]
        }
      }

      addContact = (contact) => {
        let upContacts = this.state.contacts;
        upContacts.push(contact);
        this.setState({contacts : upContacts}); 

      };
      deleteContact = (name) => {
        let oldContacts = this.state.contacts;
        let upContacts = oldContacts.filter(contact => contact.name !== name);
        this.setState({ contacts: upContacts});
      };
  render(){
    return (
      <div className='container '>
        <AddContact  addContact={this.addContact}/>
        <div className='row my-5'>
          <div className='col-md-6 mx-auto'>
            <div className='card bg-white'>
            <table>
          <thead>
          <tr>
            <th>Nom</th>
            <th>Telephone</th>
            <th>ville</th>
            <td>Action</td>
          </tr>
          </thead>
          <tbody>
            {
              this.state.contacts.map((contact,index)=> (  
                 <Contactpage 
                  deleteContact={this.deleteContact}
                  key={index} contact={contact}/>
                 ))
            }
          </tbody>
        </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  }
 
  
export default Contact;
