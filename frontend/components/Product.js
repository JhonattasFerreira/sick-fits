import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import FormatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';

const Product = ({ product }) => (
  <ItemStyles>
    <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
    <Title>
      <Link href={`/product/${product.id}`}>{product.name}</Link>
    </Title>
    <PriceTag>{FormatMoney(product.price)}</PriceTag>
    <p>{product.name}</p>
    <div className="buttonList">
      <Link
        href={{
          pathname: '/update',
          query: {
            id: product.id,
          },
        }}
      >
        Edit ✏️
      </Link>
      <DeleteProduct id={product.id}>Delete</DeleteProduct>
    </div>
  </ItemStyles>
);

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    photo: PropTypes.shape({
      image: PropTypes.shape({
        publicUrlTransformed: PropTypes.string,
      }),
    }),
  }),
};
