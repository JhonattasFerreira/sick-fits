import PropTypes from 'prop-types';
import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

const ResetPage = ({ query }) => {
  if (!query?.token) {
    return (
      <div>
        <p>Sorry you must suplly a token</p>
        <RequestReset />
      </div>
    );
  }

  return (
    <div>
      <Reset token={query.token} />
    </div>
  );
};

export default ResetPage;

ResetPage.propTypes = {
  query: PropTypes.shape({
    token: PropTypes.string,
  }),
};
