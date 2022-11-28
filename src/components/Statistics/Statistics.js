import React from 'react';
import CountUp from 'react-countup';
import ProgressBar from 'react-customizable-progressbar';
import * as s from './Statistics.module.css';
import { useInView } from 'react-intersection-observer';

export const Statistics = ({ statistics }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <ul ref={ref} className={s.list}>
      {statistics &&
        statistics.map((el, index) => (
          <li key={index}>
            <div className={s.mainWrapper}>
              <ProgressBar
                progress={inView && 100}
                radius={55}
                strokeColor={'#02931C'}
                strokeWidth={8}
                trackStrokeWidth={8}
                trackStrokeColor={'gray'}
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
                      <span className="" ref={countUpRef} />
                      <span className={s.unitsText}>
                        {el.units && el.units}
                      </span>
                    </div>
                    <p className="">{el.category && el.category}</p>
                  </div>
                )}
              </CountUp>
            </div>
          </li>
        ))}
    </ul>
  );
};
