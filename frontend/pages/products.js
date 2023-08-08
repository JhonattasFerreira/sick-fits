import Products from '../components/Products';
import Pagination from '../components/Pagination';

const productsPage = () => (
  <div>
    <Pagination page={1} />
    <Products />
    <Pagination page={1} />
  </div>
);

export default productsPage;
