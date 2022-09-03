import React from 'react';
import PropTypes from 'prop-types';
import s from '../Feedback.module.css'

const Section = ({ title, children }) => (
    <section >
      <h1 className={s.header}>{title}</h1>
      {children}
    </section>
  );
  
  Section.propTypes = {
    title: PropTypes.string.isRequired,
  }
  
  export default Section;