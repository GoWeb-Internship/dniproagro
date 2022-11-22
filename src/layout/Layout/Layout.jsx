import { Container, Logo } from 'components';
import { Header } from 'layout/Header/Header';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <main className="flex-grow">{children}</main>

      <footer>
        <Container className="flex justify-center">
          <Logo />
        </Container>
      </footer>
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
