import PropTypes from 'prop-types';
import UpdateProcuct from '../components/UpdateProcuct';

const UpdatePage = ({ query }) => (
  <div>
    <UpdateProcuct id={query.id} />
  </div>
);

UpdatePage.propTypes = {
  query: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default UpdatePage;
