import React from 'react';

export default class ContactDetails extends React.Component {
  render(){

    const details = (
      <div>
        <p>{this.props.contact.name} <br/>
        {this.props.contact.phone}</p>
      </div>
    );
    const blank = (<div>Nothing is selected</div>);

    return(
      <div>
        <h1>Details</h1>
        <p>NOTE: To see details, click the name.</p>
        {this.props.isSelected ? details : blank}
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: ''
  }
};
