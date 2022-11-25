import * as React from 'react';
import { Link } from 'react-scroll';
import { anchorScrollDuration } from 'utils/constants';
import { navList, navItem, baseLink, activeLink } from './NavBar.module.css';

export const NavBar = ({ sections }) => {
  return (
    <nav>
      <ul className={navList}>
        {sections.map(({ title, chapter }, index) => (
          <li key={index} className={`${navItem} `}>
            <Link
              className={`${baseLink}`}
              activeClass={`${activeLink}`}
              to={chapter}
              href="/"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-150}
              duration={anchorScrollDuration}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
