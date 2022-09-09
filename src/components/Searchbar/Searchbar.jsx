import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = { value: '' };

  onHandleInput = e => {
    this.setState({ value: e.currentTarget.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === ''){
      alert('Введите данные для поиска')
      return
    }
    const { onSubmit } = this.props;
    onSubmit(this.state.value);
    this.setState({value: ''})
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.onHandleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.button_search}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            name="search"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
  


// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import s from '../Searchbar/Searchbar.module.css'


// export default class Searchbar extends Component {


// render() {
//       return (
//         <header className={s.searchbar}>
//           <form className={s.form} onSubmit={this.onHandleSubmit}>
//             <button type="submit" className={s.button}>
//               <span className={s.button_search}>Search</span>
//             </button>
  
//             <input
//               className={s.input}
//               type="text"
//               name="search"
//               value={this.state.value}
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//               onChange={this.onHandleInput}
//             />
//           </form>
//         </header>
//       );
//     }
//   }






