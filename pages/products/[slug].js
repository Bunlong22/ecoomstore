import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import data from '../../utils/data';
import { Store } from '../../utils/Store';

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const router = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Produt Not Found</div>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };
 
  // 
  // const kay = data.kays.find((a) => a.slug === slug);
  // if (!kay) {
  //   return <div>Produt Not Found</div>;
  // }
  // const addToCart = () => {
  //   const eaistItem = state.cart.cartItems.find((a) => a.slug === kay.slug);
  //   const quantitys = eaistItem ? eaistItem.quantity + 1 : 1;

  //   if (kay.countInStock < quantitys) {
  //     alert('Sorry. Product is out of stock');
  //     return;
  //   }

  //   dispatch({ type: 'CART_ADD_ITEM', payload: { ...kay, quantitys } });
  //   router.push('/cart');
  // };
 

  // 19/10/2022
  // error on dynamic route can't display data from [slug], 
  // Fix it by change href /product to /products cuz of my file path
  return (
    <Layout title={product.name}>
       
      <div className="py-1">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In stock' : 'Out of Stock'}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      
    </Layout>
 
  );
}


