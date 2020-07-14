import React from 'react';
import PropTypes from 'prop-types';

export default class ContactCreate extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState)
  }

  handleClick(){
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    };

    this.props.onCreate(contact);

    this.setState({
      name: '',
      phone: ''
    });

    this.nameInput.focus();
  }

  // Add new contacts by pressing an Enter key
  handleKeyPress(e) {
    if(e.charCode===13){
      this.handleClick();
    }
  }

  render() {
    return(
      <div>
        <h1>Create Contact</h1>
        <p>
          <input type='text' name='name' placeholder='Enter Name...'
                  value={this.state.name}
                  onChange={this.handleChange}
                  ref={(ref) => {this.nameInput = ref}}
          />
        </p>
        <p>
          <input type='text' name='phone' placeholder='Enter Phone Number...'
                  value={this.state.phone}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
          />
        </p>
        <button onClick={this.handleClick}>CREATE</button>
      </div>
    );
  }
}

ContactCreate.propTypes = {
  onCreate: PropTypes.func
};

ContactCreate.defaultProps = {
  onCreate: () => {console.error('onCreate not defined')}
}
