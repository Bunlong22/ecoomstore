/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
export default function KayScreen({kay}) {
  return (
    // Create Card components in homepage
    <div className="card">
    <Link href={`/products/${kay.hello}`}>
      <a>
        <img
          src={kay.image}
          alt={kay.name}
          className="rounded shadow"
        />
      </a>
    </Link>
    <div className="flex flex-col items-center justify-center p-5">
      <Link href= {`/products/${kay.hello}`}>
        <a>
          <h2 className="text-lg">{kay.name}</h2>
        </a>
      </Link>
      <p className="mb-2">{kay.brand}</p>
      <p>${kay.price}</p>
      <button className="primary-button" type="button">
        Add to cart
      </button>
    </div>
  </div>
  )
}
  // const { state, dispatch } = useContext(Store);
  // const { query } = useRouter();
  // const router = useRouter();
  // const { slug } = query;
  // const kay = data.kays.find((a) => a.slug === slug);
  // if (!kay) {
  //   return <div>Produt Not Found</div>;
  // }
  // const addToHandle = () => {
  //   const existItem = state.cart.cartItems.find((a) => a.slug === kay.slug);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;

  //   if (kay.countInStock < quantity) {
  //     alert('Sorry. Product is out of stock');
  //     return;
  //   }

  //   dispatch({ type: 'CART_ADD_ITEM', payload: { ...kay, quantity } });
  //   router.push('/cart');
  // };

