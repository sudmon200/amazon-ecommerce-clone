import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Product from './components/Product';

function App() {
  return (
    <>
      <Header />
      <div className='layout'>
        <Banner />
        <div className='productLayout'>
          <div className='productLayout__row'>
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className='productLayout__row'>
            <Product />
            <Product />
            <Product />
          </div>
          <div className='productLayout__row'>
            <Product />
            <Product />
          </div>
          <div className='productLayout__row'>
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
