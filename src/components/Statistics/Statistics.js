import React from 'react';
import CountUp from 'react-countup';
import ProgressBar from 'react-customizable-progressbar';
import * as s from './Statistics.module.css';
import { useInView } from 'react-intersection-observer';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export const Statistics = ({ statistics }) => {
  const breakpoints = useBreakpoint();
  const isMobile = breakpoints.sm;
  const isTablet = breakpoints.md && breakpoints.mdt;
  const isDesktop = breakpoints.lg;

  const getClass = index => {
    if (index === 0) {
      return s.mainWrapperFirst;
    }
    if (index === 1) {
      return s.mainWrapperSecond;
    }
    if (index === 2) {
      return s.mainWrapperThird;
    }
    if (index === 3) {
      return s.mainWrapperFourth;
    }
  };

  const getRadius = index => {
    if (isMobile && (index === 0 || index === 3)) {
      return 78;
    }
    if (isMobile && (index === 1 || index === 2)) {
      return 56;
    }
    if (isTablet && (index === 0 || index === 2)) {
      return 56;
    }
    if (isTablet && (index === 1 || index === 3)) {
      return 78;
    }
    if (isDesktop && (index === 0 || index === 2)) {
      return 100;
    }
    if (isDesktop && (index === 1 || index === 3)) {
      return 109;
    }
  };

  const getStrokeWidth = index => {
    if (isMobile && (index === 0 || index === 3)) {
      return 10;
    }
    if (isMobile && (index === 1 || index === 2)) {
      return 8;
    }
    if (isTablet && (index === 0 || index === 2)) {
      return 8;
    }
    if (isTablet && (index === 1 || index === 3)) {
      return 10;
    }
    if (isDesktop && (index === 0 || index === 2)) {
      return 12;
    }
    if (isDesktop && (index === 1 || index === 3)) {
      return 14;
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <ul ref={ref} className={s.list}>
      {statistics &&
        statistics.map((el, index) => (
          <li className={s.listItem} key={index}>
            <div className={getClass(index)}>
              <ProgressBar
                progress={inView && 100}
                radius={getRadius(index)}
                strokeColor={'#064E3B'}
                strokeWidth={getStrokeWidth(index)}
                trackStrokeWidth={getStrokeWidth(index)}
                trackStrokeColor={'rgba(2, 147, 28, 0.2)'}
                trackTransition={0}
                initialAnimation={true}
                transition={'3s ease'}
              />
              <CountUp
                start={0}
                end={inView && el?.value}
                delay={0}
                duration={2.75}
              >
                {({ countUpRef }) => (
                  <div className={s.wrapper}>
                    <div className={s.textWrapper}>
                      <span className={s.textCount} ref={countUpRef} />
                      <span className={s.unitsText}>
                        {el.units && el.units}
                      </span>
                    </div>
                    <p className={s.category}>{el.category && el.category}</p>
                  </div>
                )}
              </CountUp>
            </div>
          </li>
        ))}
    </ul>
  );
};
