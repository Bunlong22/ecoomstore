// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React from 'react';
// import { useContext } from 'react';
// import Layout from '../../components/layout/Layout';
// import data from '../../utils/data';
// import { Store } from '../../utils/Store';

// export default function ProductScreen() {
//   const { state, dispatch } = useContext(Store);
//   const { query } = useRouter();
//   const router = useRouter();
//   const { slug } = query;
//   const kay = data.kays.find((x) => x.slug === slug);
//   if (!kay) {
//     return <div>Produt Not Found</div>;
//   }
//   const addToCartHandler = () => {
//     const existItem = state.cart.cartItems.find((x) => x.slug === kay.slug);
//     const quantity = existItem ? existItem.quantity + 1 : 1;

//     if (kay.countInStock < quantity) {
//       alert('Sorry.Product is out of stock');
//       return;
//     }

//     dispatch({ type: 'CART_ADD_ITEM', payload: { ...kay, quantity } });
//     router.push('/cart');
//   };
 

//   // 19/10/2022
//   // error on dynamic route can't display data from [slug], 
//   // Fix it by change href /product to /products cuz of my file path
//   return (
//     <Layout title={kay.name}>
       
//       <div className="py-1">
//         <Link href="/">back to kays</Link>
//       </div>
//       <div className="grid md:grid-cols-4 md:gap-3">
//         <div className="md:col-span-2">
//           <Image
//             src={kay.image}
//             alt={kay.name}
//             width={480}
//             height={480}
//             layout="responsive"
//           ></Image>
//         </div>
//         <div>
//           <ul>
//             <li>
//               <h1 className="text-lg">{kay.name}</h1>
//             </li>
//             <li>Category: {kay.category}</li>
//             <li>Brand: {kay.brand}</li>
//             <li>
//               {kay.rating} of {kay.numReviews} reviews
//             </li>
//             <li>Description: {kay.description}</li>
//           </ul>
//         </div>
//         <div>
//           <div className="card p-5">
//             <div className="mb-2 flex justify-between">
//               <div>Price</div>
//               <div>${kay.price}</div>
//             </div>
//             <div className="mb-2 flex justify-between">
//               <div>Status</div>
//               <div>{kay.countInStock > 0 ? 'In stock' : 'Out of Stock'}</div>
//             </div>
//             <button
//               className="primary-button w-full"
//               onClick={addToCartHandler}
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
      
//     </Layout>
//   );
// }