import { render } from 'react-dom';
import React from 'react';
import ContactsList from './ContactsList';

let contacts = [{
    id: 1,
    name: 'Rory',
    phone: '555 333 5555'
},
{
    id: 2,
    name: 'Tim',
    phone: '222 333 4444'
},
{
    id: 3,
    name: 'Bob',
    phone: '111 666 5555'
},
{
    id: 4,
    name: 'John',
    phone: '888 222 9999'
}]

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                <ContactsList contacts={this.props.contacts}/>
            </div>
        )
    }
}

render(<App contacts={contacts}/>, document.getElementById('app'));