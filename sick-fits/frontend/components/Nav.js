import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
      {/* <Link href="/cart">Cart</Link> */}
    </nav>
  )
}

export default Nav
