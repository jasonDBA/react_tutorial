import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contactData: [
        {
          name: 'Abet',
          phone: '000-000-0001'
        },
        {
          name: 'Brian',
          phone: '000-000-0022'
        },
        {
          name: 'Danel',
          phone: '000-000-0333'
        },
        {
          name: 'George',
          phone: '000-000-4444'
        }
      ]
    }
  }

  render(){

    const mapToComponents = (data) => {
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i} />)
      })
    }

    return(
      <div>
        <h1>Contact</h1>
        <input
          name='keyword'
          placeholder="Search"
        />
        <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    );
  }
}
