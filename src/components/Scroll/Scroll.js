import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

export const Scroll = ({
  children,
  heigth,
  trackVerticalStyles,
  thumbVerticalStyles,
}) => {
  return (
    <Scrollbars
      style={{ height: heigth }}
      universal
      thumbSize={28}
      hideTracksWhenNotNeeded={true}
      renderTrackVertical={props => (
        <div {...props} className={trackVerticalStyles} />
      )}
      renderThumbVertical={props => (
        <div {...props} className={thumbVerticalStyles} />
      )}
      renderTrackHorizontal={props => <div {...props} className="" />}
      renderThumbHorizontal={props => <div {...props} className="" />}
      renderView={props => <div {...props} className="" />}
    >
      {children}
    </Scrollbars>
  );
};
