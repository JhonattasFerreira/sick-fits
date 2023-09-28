import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGray);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }) => {
  const { product, id } = cartItem;
  if (!product) return null;

  return (
    <CartItemStyles>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(product.price * cartItem.quantity)}-
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={id} />
    </CartItemStyles>
  );
};

export default CartItem;

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.string,
    quantity: PropTypes.number,
    product: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      photo: PropTypes.shape({
        image: PropTypes.shape({
          publicUrlTransformed: PropTypes.string,
        }),
      }),
    }),
  }),
};
