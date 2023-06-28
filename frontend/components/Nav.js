import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/account">Account</Link>
    <Link href="/orders">Orders</Link>
    <Link href="/products">Products</Link>
    <Link href="/sell">Sell</Link>
  </NavStyles>
);

export default Nav;
