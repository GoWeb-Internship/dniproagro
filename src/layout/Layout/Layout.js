import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Header } from 'layout';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export const withLayout = Component => props => {
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
