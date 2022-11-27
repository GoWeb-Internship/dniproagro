import * as React from 'react';
import { Link } from 'react-scroll';
import { anchorScrollDuration } from 'utils/constants';
import * as s from './NavBar.module.css';

export const NavBar = ({ sections, isDesktop, setIsMenuOpen }) => {
  return (
    <nav>
      <ul className={s.navList}>
        {sections.map(({ title, chapter }, index) => (
          <li key={index} className={`${s.navItem} group`}>
            <Link
              className={s.baseLink}
              activeClass={s.activeLink}
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
