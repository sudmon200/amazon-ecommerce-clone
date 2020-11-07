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
            productId={1}
            info={'OnePlus 8T 5G (Lunar Silver, 8GB RAM, 128GB Storage)'}
            price={42999.99}
            image={
              'https://m.media-amazon.com/images/I/71m05O2uNdL._AC_AA180_.jpg'
            }
            ratings={5}
          />
          <Product
            productId={2}
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
            productId={3}
            info={'Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)'}
            price={22499.99}
            image={
              'https://m.media-amazon.com/images/I/71ahT-X2FgL._AC_AA180_.jpg'
            }
            ratings={3}
          />
          <Product
            productId={4}
            info={'Redmi Note 8 (Neptune Blue, 4GB RAM, 64GB Storage)'}
            price={11499.99}
            image={
              'https://m.media-amazon.com/images/I/61Z-7BVaFUL._AC_AA180_.jpg'
            }
            ratings={2}
          />
        </div>

        <div className='product__row'>
          <Product
            productId={3}
            info={
              'Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Certified Android LED TV 55X7500H (Black) (2020 Model)'
            }
            price={75499.99}
            image={
              'https://m.media-amazon.com/images/I/91QD0vRZdVL._AC_UY218_.jpg'
            }
            ratings={5}
          />
          <Product
            productId={4}
            info={
              'Samsung 139 cm (55 Inches) 4K Ultra HD LED Smart TV UA55RU7100KXXL (Black) (2019 model)'
            }
            price={70499.99}
            image={
              'https://m.media-amazon.com/images/I/A1Sfwfs0WtL._AC_UY218_.jpg'
            }
            ratings={4}
          />
          <Product
            productId={5}
            info={
              'LG 139 cm (55 inches) 4K UHD Smart LED TV 55UM7290PTD (Dark Steel Silver) (2019 Model)'
            }
            price={55789.99}
            image={
              'https://m.media-amazon.com/images/I/81QJ2tzfzmL._AC_UY218_.jpg'
            }
            ratings={3}
          />
        </div>

        <div className='product__row'>
          <Product
            productId={3}
            info={
              'HP Pavilion Gaming 15.6-inch FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD + 256GB SSD/Windows 10/144Hz/NVIDIA GTX 1650 4GB/Shadow Black), 15-ec1052AX'
            }
            price={72821.99}
            image={
              'https://m.media-amazon.com/images/I/71FeUtw+TPL._AC_UY218_.jpg'
            }
            ratings={5}
          />
          <Product
            productId={4}
            info={
              'MSI GL65 Leopard, Intel 9th Gen. i5-9300H, 15.6" FHD Gaming Laptop (8GB/512GB NVMe SSD/Windows 10 Home/Nvidia GTX 1650/ Black/2.3Kg), 9SCXK-065IN'
            }
            price={57990.99}
            image={
              'https://m.media-amazon.com/images/I/81cBdLyWiGL._AC_UY218_.jpg'
            }
            ratings={4}
          />
        </div>

        <div className='product__row'>
          <Product
            productId={3}
            info={
              'SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black'
            }
            price={152450.99}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SL1500_.jpg'
            }
            ratings={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
