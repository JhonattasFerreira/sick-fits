import { ApolloProvider } from '@apollo/client';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import withData from '../lib/withData';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

/* eslint-disable react/jsx-props-no-spreading */
const MyApp = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ApolloProvider>
);

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;

  return { pageProps };
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  apollo: PropTypes.any,
};

export default withData(MyApp);
