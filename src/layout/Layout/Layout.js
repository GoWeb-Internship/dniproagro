import { Footer } from 'layout/Footer/Footer';
import { Header } from 'layout/Header/Header';
import React from 'react';

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
