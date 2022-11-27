import React from 'react';
import CountUp from 'react-countup';
import ProgressBar from 'react-customizable-progressbar';

export const Statistics = ({ statistics }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4">
      {statistics &&
        statistics.map((el, index) => (
          <li key={index}>
            <div className="relative mx-auto w-[150px]">
              <ProgressBar
                progress={100}
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
                end={el.value && el.value}
                delay={0}
                duration={2.75}
              >
                {({ countUpRef }) => (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-green">
                    <div className="flex justify-center">
                      <span className="" ref={countUpRef} />
                      <span className="ml-2">{el.units && el.units}</span>
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
