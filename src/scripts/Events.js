import React from 'react';
import { Script } from 'gatsby';

const Events = () => {
  return (
    <Script strategy="post-hydrate">
      {`
        if (typeof window !== 'undefined') {
          if (window.fbq != null) {
            window.fbq('track', 'PageView');
          }
        }
      `}
    </Script>
  );
};

export default Events;
