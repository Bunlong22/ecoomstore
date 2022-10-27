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

