import * as React from 'react';
import { useState } from 'react';
import { Link, graphql } from 'gatsby';
import { Container, Spinner } from 'components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Seo from '../components/Seo';
import 'assets/styles/404.css';
import { useEffect } from 'react';

const NotFoundPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const content = t('404', { returnObjects: true });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 1500);
  }, []);

  return (
    <main>
      <Seo
        title="404 Not Found"
        description={content.title}
        lang={i18n.language}
      />

      {isLoading && <Spinner />}

      <section className="section">
        <Container>
          <div className="wrapper">
            <h1 className="main">404</h1>
            <h2 className="title">{content.title}</h2>
            <p className="text">{content.description}</p>
            <Link className="link" to="/">
              {content.button}
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
