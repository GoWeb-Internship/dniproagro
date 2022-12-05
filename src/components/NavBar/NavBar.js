import * as React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { anchorScrollDuration } from 'utils/constants';
import * as s from './NavBar.module.css';

export const NavBar = ({ sections, setIsMenuOpen }) => {
  const breakpoints = useBreakpoint();
  const isDesktop = breakpoints.lg;

  return (
    <nav>
      <ul className={s.navList}>
        {sections?.map(({ title, chapter }, index) => (
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
              offset={isDesktop ? -137 : -91}
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

NavBar.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      chapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
