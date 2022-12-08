import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useInView } from 'react-intersection-observer';
import * as s from './Map.module.css';

const GOOGLE_API_KEY = process.env.GATSBY_GOOGLE_API_KEY;

const defaultcenter = {
  lat: 48.184682,
  lng: 36.240398,
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  keyboardShortcuts: false,
  fullscreenControl: false,
};

const Map = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
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

  const language = location?.language;

  const coordinates = location?.location.split(':')[2].slice(1, -2);

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
    <div ref={ref}>
      {location
        ? inView && (
            <LoadScript googleMapsApiKey={GOOGLE_API_KEY} language={language}>
              <GoogleMap
                mapContainerClassName={s.container}
                center={center}
                zoom={13}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          )
        : inView && (
            <LoadScript googleMapsApiKey={GOOGLE_API_KEY} language={language}>
              <GoogleMap
                mapContainerClassName={s.container}
                center={defaultcenter}
                zoom={13}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
              >
                <Marker position={defaultcenter} />
              </GoogleMap>
            </LoadScript>
          )}
    </div>
  );
};

export default Map;
