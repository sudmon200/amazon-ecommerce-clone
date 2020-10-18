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
            info={'OnePlus 8T 5G (Lunar Silver, 8GB RAM, 128GB Storage)'}
            price={'₹ 42,999.00'}
            img={
              'https://m.media-amazon.com/images/I/71CuwgwCQdL._AC_UY436_FMwebp_QL65_.jpg'
            }
            ratings={5}
          />
          <Product
            info={
              'Apple iPhone 11 (64GB) - Black (EarPods & Power Adapter in The Box)'
            }
            price={'₹ 48,999.00'}
            img={
              'https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg'
            }
            ratings={4}
          />
          <Product
            info={'Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)'}
            price={'₹ 22,499.00'}
            img={
              'https://images-na.ssl-images-amazon.com/images/I/710weRkP-nL._SL1500_.jpg'
            }
            ratings={3}
          />
          <Product
            info={'Redmi Note 8 (Neptune Blue, 4GB RAM, 64GB Storage)'}
            price={'₹ 11,499.00'}
            img={
              'https://images-na.ssl-images-amazon.com/images/I/61Z-7BVaFUL._SL1500_.jpg'
            }
            ratings={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
