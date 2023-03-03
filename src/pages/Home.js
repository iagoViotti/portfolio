import React, { useContext } from 'react';
import pageContext from '../Context/pageContext';
import '../App.css';

function Home() {
  const { page, setPage } = useContext(pageContext);
  return (
    <div>
      <h1>{page}</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
