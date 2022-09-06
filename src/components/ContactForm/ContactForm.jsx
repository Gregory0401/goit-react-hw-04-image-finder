import  { React,  Component } from 'react';
import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css';

const STATE = {
  name: '',
  number: '',
}

class ContactForm extends Component {
  state = STATE

  handleChange = event => {
    const{ name, value} = event.currentTarget;
    this.setState({[name]: value})
  }

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  validateForm = () => {
  const { name, number } = this.state;
  const { onCheckUnique } = this.props
  if (!name || !number) {
      alert(`${name} is already in contacts`);
      return false
  }
  return onCheckUnique(name)
}

resetForm = () => this.setState(STATE)

    render(){
        return(
            <form className={s.form} onSubmit={this.onHandleSubmit}>
            <h1 className={s.header}>📞 Phonebook</h1>
            <div  className={s.container}>
           <label htmlFor="name" className={s.label_name}>
            Name 
            <input 
            type="text"
            name="name"
            id="name"
            className={s.input_name}
            placeholder="Enter name ← "
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
            </label> 
            <label className={s.label_number}>
              Number
              <input
              type="tel"
              name="number"
              id="number"
              className={s.input_number}
              value={this.state.number}
              onChange={this.handleChange}
              placeholder="Enter phone number ← "
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              />
            </label>
            <button className={s.button} type="submit" onClick={() => { }}>Add contact</button>
            </div>
            </form>
        )
    }
  }
  
  ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  export default ContactForm;
  










