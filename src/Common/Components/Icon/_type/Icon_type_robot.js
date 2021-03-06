import React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';

const IconRobot: ModBody = (IconBase, { className }) => (
  <div className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="29" viewBox="0 0 48 29">
      <title>
        robot-cleaner
      </title>
      <g>
        <path d="M24 0.1C11.7 0.1 0 5.4 0 11.1 0 21.8 3.9 28.1 24 28.1 44.1 28.1 48 21.8 48 11.1 48 5.4 36.3 0.1 24 0.1ZM24 2.1C36.8 2.1 46 7.4 46 11.1 46 14.4 37.2 18.1 24 18.1 10.8 18.1 2 14.4 2 11.1 2 7.4 11.2 2.1 24 2.1ZM24 26.1C8.3 26.1 3.4 22.2 2.3 15.1 6.3 18.4 15.2 20.1 24 20.1 32.8 20.1 41.7 18.4 45.7 15.1 44.6 22.2 39.7 26.1 24 26.1Z" />
        <circle cx="18" cy="5.1" r="1" />
        <circle cx="22" cy="5.1" r="1" />
        <circle cx="26" cy="5.1" r="1" />
        <circle cx="30" cy="5.1" r="1" />
        <path d="M22 23.1C22 23.6 22.4 24.1 23 24.1L25 24.1C25.6 24.1 26 23.6 26 23.1 26 22.5 25.6 22.1 25 22.1L23 22.1C22.4 22.1 22 22.5 22 23.1Z" />
      </g>
    </svg>
  </div>
);

const IconTypeRobot = withBemMod('Icon', { type: 'robot' }, IconRobot);

export default IconTypeRobot;
