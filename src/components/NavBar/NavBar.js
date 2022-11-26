import * as React from 'react';
import { Link } from 'react-scroll';
import { anchorScrollDuration } from 'utils/constants';
import { navList, navItem, baseLink, activeLink } from './NavBar.module.css';

export const NavBar = ({ sections, isDesktop, setIsMenuOpen }) => {
  return (
    <nav>
      <ul className={navList}>
        {sections.map(({ title, chapter }, index) => (
          <li key={index} className={`${navItem} group`}>
            <Link
              className={baseLink}
              activeClass={activeLink}
              to={chapter}
              href="/"
              spy={true}
              hashSpy={true}
              smooth="easeInOutQuart"
              delay={100}
              offset={-100}
              duration={anchorScrollDuration}
              onSetActive={!isDesktop ? () => setIsMenuOpen(false) : null}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
