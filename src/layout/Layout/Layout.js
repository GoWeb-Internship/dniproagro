import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Footer, Header } from 'layout';
import Seo from 'components/Seo';

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <div className="flex h-screen flex-col">
      <Seo title="DniproAgro" description="Опис сайту" lang={i18n.language} />
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
