import React, {Component} from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Layout, MainTitle, Title } from "./Layout/Layout";
import ContactList from './ContactList'
import ContactForm from "./ContactForm";
import Filter from "./Filter";

const KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
   
  componentDidMount(){
    const savedContacts = localStorage.getItem(KEY);
    if(savedContacts !== null){
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({contacts: parsedContacts});
      return;
    }
    
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem(KEY, JSON.stringify(this.state.contacts))
    };
  };
  
  addContact = newContact=>{
    this.setState(prevState => ({
      contacts:[...prevState.contacts, newContact]
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts.filter(contact => contact.id !== contactId)]
      }
    });
  };

  filterContacts = () => {
    const {contacts, filter} = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    if(filter){
      return contacts.filter(contact => contact.name.toLowerCase().includes(lowerCaseFilter))
    } else {
      return contacts;
    }
  }

  render(){
    const contacts = this.filterContacts();
    
    return (
        <Layout>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm  onSubmit={this.addContact} contacts={this.state.contacts}/>
      
          <Title>Contacts</Title>
          <Filter onChange={e => this.setState({filter: e.target.value})} value={this.state.filter}/>
           <ContactList contacts ={contacts} deleteContact={this.deleteContact}>
           </ContactList>
        <GlobalStyle/>
        </Layout>
    );
  };

};

export default App; 

