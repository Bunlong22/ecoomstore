import Head from 'next/head'
import React, { Children } from 'react'
import Link from 'next/link'

export default function Layout({title, children}) {
  return (
    <>
    <Head>
        {/* Checking condition if true or false return the same */}
        <title >{title ? title + '-EcoomStore': 'EccomStore'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
         
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
<header>
<nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/home">
              <a className="text-xl font-bold">EccomStore</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner ">
          <p>Copyright © 2022 EccomStore</p><br/>
        </footer>
    </div>
    </>
  )
}
