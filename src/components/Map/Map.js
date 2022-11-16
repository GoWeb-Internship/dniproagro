import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GOOGLE_API_KEY = process.env.GATSBY_GOOGLE_API_KEY;

const containerStyle = {
  width: '400px',
  height: '400px',
};

let center = {
  lat: 50.4277571,
  lng: 30.6026473,
};
function MyComponent() {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allMarkdownRemark(
          filter: { frontmatter: { chapter: { eq: "contacts" } } }
        ) {
          nodes {
            frontmatter {
              location
            }
          }
        }
      }
    `,
  );

  const location = data.allMarkdownRemark.nodes;
  const coordinates = location.map(({ frontmatter }) => {
    return frontmatter.location.split(':')[2].slice(1, -2);
  });

  center = {
    lat: Number(coordinates.join(',').split(',')[1]),
    lng: Number(coordinates.join(',').split(',')[0]),
  };

  //   const [map, setMap] = React.useState(null);

  //   const onLoad = React.useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds();
  //     map.fitBounds(bounds);
  //     setMap(map);
  //   }, []);

  //   const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null);
  //   }, []);

  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);