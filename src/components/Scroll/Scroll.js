import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

export const Scroll = ({
  children,
  heigth,
  position = 'right-0',
  // trackVerticalStyles,
  // renderViewStyles,
}) => {
  return (
    <Scrollbars
      style={{ height: heigth }}
      universal
      hideTracksWhenNotNeeded={true}
      renderTrackVertical={props => (
        <div
          {...props}
          className={`${position} top-0 h-full !w-[12px] rounded-main border border-mint`}
        />
      )}
      renderThumbVertical={props => (
        <div {...props} className="rounded-main bg-mint" />
      )}
      renderTrackHorizontal={props => <div {...props} className="" />}
      renderThumbHorizontal={props => <div {...props} className="" />}
      renderView={props => <div {...props} className="" />}
    >
      {children}
    </Scrollbars>
  );
};
