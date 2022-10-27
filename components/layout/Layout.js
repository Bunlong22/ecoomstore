import Head from 'next/head'
import  {useContext, useEffect,useState} from 'react'
import Link from 'next/link'
import { Store } from '../../utils/Store';


export default function Layout({title, children}) {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
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
            <Link href="/">
              <a className="text-xl font-bold">EccomStore</a>
            </Link>
            <div>
              <Link href="/">
              <a className="p-2">Products</a>
              </Link>
              <Link href="/cart">
  
                <a className="p-2">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/LoginForm">
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
