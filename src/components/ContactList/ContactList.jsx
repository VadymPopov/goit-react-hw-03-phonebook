import React from "react";
import PropTypes from 'prop-types';
import {MdDelete} from 'react-icons/md';
import { List, Item, IconUser, Text, Button } from "./ContactList.styled";

const ContactList = ({contacts, deleteContact}) => {
    return (
        <List>
            {contacts.map(({name, id, number})=>
            <Item key={id}>
                <Text><IconUser/>{name} : {number}</Text>
            <Button type="button" onClick={()=>deleteContact(id)}><MdDelete/></Button>
            </Item>
            )}
        </List>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(
        {name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,}))
};

export default ContactList;