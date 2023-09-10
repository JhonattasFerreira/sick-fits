import styled from 'styled-components';
import SingIn from '../components/SignIn';
import SingUp from '../components/SignUp';
import RequestReset from '../components/RequestReset';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const signInPage = () => (
  <GridStyles>
    <SingIn />
    <SingUp />
    <RequestReset />
  </GridStyles>
);

export default signInPage;
