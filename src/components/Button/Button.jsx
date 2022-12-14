import PropTypes from 'prop-types';
import s from '../Button/Button.module.css';


function Button({ onLoadMore }) {   
        return(
            <button type="button" className={s.button} onClick={onLoadMore}>Load more...</button>
        )
    }
Button.propTypes = { onLoadMore: PropTypes.func.isRequired };

export default Button;

