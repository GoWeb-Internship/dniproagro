import React from 'react';
import * as s from './Spinner.module.css';

export const Spinner = () => (
  <div className="absolute top-0 left-0 h-[calc(100%+2px)] w-full bg-white">
    <div className={s.spinner}></div>
  </div>
);
