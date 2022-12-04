import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as s from './Map.module.css';

const GOOGLE_API_KEY = process.env.GATSBY_GOOGLE_API_KEY;

const defaultcenter = {
  lat: 48.184682,
  lng: 36.240398,
};

const Map = () => {
  const { i18n } = useTranslation();

  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { chapter: { eq: "contacts" } } }
        ) {
          nodes {
            frontmatter {
              location
              language
            }
          }
        }
      }
    `,
  );

  const location = nodes?.find(
    ({ frontmatter: { language } }) => language === i18n.language,
  )?.frontmatter;
  console.log(nodes);
  const language = location?.language;

  const coordinates = location?.location.split(':')[2].slice(1, -2);
  console.log(coordinates);
  const center = {
    lat: Number(coordinates?.split(',')[1]),
    lng: Number(coordinates?.split(',')[0]),
  };

  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <>
      {location ? (
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerClassName={s.container}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
            language={language}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      ) : (
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerClassName={s.container}
            center={defaultcenter}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
            language={language}
          >
            <Marker position={defaultcenter} />
          </GoogleMap>
        </LoadScript>
      )}
    </>
  );
};

export default Map;
