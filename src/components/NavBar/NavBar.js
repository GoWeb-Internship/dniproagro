import * as React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { navList, navItem } from './NavBar.module.css';

export const NavBar = ({ sections }) => {
  return (
    <nav>
      <ul className={navList}>
        {sections.map(({ title, chapter }, index) => (
          <li key={index} className={navItem}>
            <AnchorLink to={`/#${chapter}`} title={`${title}`} />
            {/* {title} */}
          </li>
        ))}
      </ul>
    </nav>
  );
};
