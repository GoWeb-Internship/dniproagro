import React from 'react';
import CountUp from 'react-countup';
import ProgressBar from 'react-customizable-progressbar';

export const Statistics = ({ statistics }) => {
  return (
    <ul className="mx-auto my-24 flex">
      {statistics &&
        statistics.map((el, index) => (
          <li className="relative mr-24" key={index}>
            <ProgressBar
              progress={100}
              radius={100}
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
              end={el.value && el.value}
              delay={0}
              duration={2.75}
            >
              {({ countUpRef }) => (
                <div>
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 text-2xl font-bold text-body-green"
                    ref={countUpRef}
                  />
                  <span className="absolute top-[55%] left-1/2 mb-8 -translate-x-1/2 font-bold text-body-green">
                    {el.units && el.units}
                  </span>
                  <p className="absolute top-[25%] left-1/2 mb-8 -translate-x-1/2 font-bold text-body-green">
                    {el.category && el.category}
                  </p>
                </div>
              )}
            </CountUp>
          </li>
        ))}
    </ul>
  );
};
