import calcTotalPrice from '../lib/calcTotalPrice';
import FormatMoney from '../lib/formatMoney';
import CartItem from './CartItem';
import { useUser } from './User';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';

const Cart = () => {
  const user = useUser();

  if (!user) return null;

  return (
    <CartStyles open>
      <header>
        <Supreme>{user.name}'s Cart</Supreme>
      </header>
      <ul>
        {user.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{FormatMoney(calcTotalPrice(user.cart))}</p>
      </footer>
    </CartStyles>
  );
};

export default Cart;
