import React, { useContext } from 'react';
import pageContext from '../Context/pageContext';
import '../App.css';

function Contact() {
  const { page, setPage } = useContext(pageContext);
  return (
    <div>
      <h1>{page}</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
