import React from 'react';
import CountUp from 'react-countup';
import ProgressBar from 'react-customizable-progressbar';

const Statistics = () => {
  return (
    <div className="mx-auto my-24 flex">
      <div className="relative mr-24">
        <ProgressBar
          progress={100}
          radius={75}
          strokeColor={'green'}
          strokeWidth={8}
          trackStrokeWidth={8}
          trackStrokeColor={'white'}
          initialAnimation={true}
          transition={'3s ease'}
        />
        <CountUp start={0} end={1548} delay={0} duration={2.75}>
          {({ countUpRef }) => (
            <div>
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 text-2xl font-bold text-green-600"
                ref={countUpRef}
              />
              <p className="absolute top-[55%] left-1/2 mb-8 -translate-x-1/2 font-bold text-green-600">
                Продажі
              </p>
            </div>
          )}
        </CountUp>
      </div>
      <div className="relative mr-24">
        <ProgressBar
          progress={75}
          radius={75}
          strokeColor={'red'}
          strokeWidth={16}
          trackStrokeWidth={8}
          trackStrokeColor={'gray'}
          trackTransition={0}
          initialAnimation={true}
          transition={'3s ease'}
        />
        <CountUp start={0} end={75} delay={0} duration={2.75}>
          {({ countUpRef }) => (
            <div>
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 text-2xl font-bold text-slate-600"
                ref={countUpRef}
              />
              <p className="absolute top-[55%] left-1/2 mb-8 -translate-x-1/2 font-bold text-green-600">
                %
              </p>
            </div>
          )}
        </CountUp>
      </div>
      <div className="relative mr-24">
        <ProgressBar
          progress={100}
          radius={75}
          strokeColor={'blue'}
          strokeWidth={8}
          trackStrokeWidth={8}
          trackStrokeColor={'yellow'}
          trackTransition={0}
          initialAnimation={true}
          transition={'3s ease'}
        />
        <CountUp start={0} end={5637} delay={0} duration={2.75}>
          {({ countUpRef }) => (
            <div>
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 text-2xl font-bold text-yellow-600"
                ref={countUpRef}
              />
              <p className="absolute top-[55%] left-1/2 mb-8 -translate-x-1/2 font-bold text-green-600">
                Клієнти
              </p>
            </div>
          )}
        </CountUp>
      </div>
    </div>
  );
};

export default Statistics;
