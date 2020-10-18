import React from 'react';
import Banner from '../../components/Banner';
import Product from '../../components/Product';

function Home() {
  return (
    <div className='layout'>
      <Banner />
      <div className='layout__product'>
        <div className='product__row'>
          <Product
            id={1}
            info={'OnePlus 8T 5G (Lunar Silver, 8GB RAM, 128GB Storage)'}
            price={42999.99}
            image={
              'https://m.media-amazon.com/images/I/71m05O2uNdL._AC_AA180_.jpg'
            }
            ratings={5}
          />
          <Product
            id={2}
            info={
              'Apple iPhone 11 (64GB) - Black (EarPods & Power Adapter in The Box)'
            }
            price={48999.99}
            image={
              'https://m.media-amazon.com/images/I/51o5RmQtroL._AC_AA180_.jpg'
            }
            ratings={4}
          />
          <Product
            id={3}
            info={'Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)'}
            price={22499.99}
            image={
              'https://m.media-amazon.com/images/I/71ahT-X2FgL._AC_AA180_.jpg'
            }
            ratings={3}
          />
          <Product
            id={4}
            info={'Redmi Note 8 (Neptune Blue, 4GB RAM, 64GB Storage)'}
            price={11499.99}
            image={
              'https://m.media-amazon.com/images/I/61Z-7BVaFUL._AC_AA180_.jpg'
            }
            ratings={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
