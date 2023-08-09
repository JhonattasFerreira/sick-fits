import PropTypes from 'prop-types';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

const ProductsPage = ({ query: { page } }) => (
  <div>
    <Pagination page={parseInt(page) || 1} />
    <Products page={parseInt(page) || 1} />
    <Pagination page={parseInt(page) || 1} />
  </div>
);

ProductsPage.propTypes = {
  query: PropTypes.shape({
    page: PropTypes.string,
  }),
};

export default ProductsPage;
