import * as React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { anchorScrollDuration } from 'utils/constants';
import * as s from './NavBar.module.css';

export const NavBar = ({ sections, setIsMenuOpen }) => {
  const breakpoints = useBreakpoint();
  const isDesktop = breakpoints.lg;

  const handleClick = evt => {
    evt.target.blur();
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <ul className={s.navList}>
        {sections?.map(({ title, chapter }, index) => (
          <li key={index} className={s.navItem}>
            <Link
              className={s.baseLink}
              activeClass={s.activeLink}
              to={chapter}
              href="/"
              spy={true}
              hashSpy={true}
              smooth="easeInOutQuart"
              // delay={50}
              offset={isDesktop ? -137 : -65}
              duration={anchorScrollDuration}
              onSetActive={!isDesktop ? handleCloseMenu : null}
              onClick={handleClick}
              ignoreCancelEvents={true}
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
