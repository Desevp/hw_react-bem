import React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';

const IconCam: ModBody = (IconBase, { className }) => (
  <div className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 48 36">
      <title>
        cam-white
      </title>
      <g>
        <path d="M24 26C27.3 26 30 23.3 30 20 30 16.7 27.3 14 24 14 20.7 14 18 16.7 18 20 18 23.3 20.7 26 24 26ZM24 16C26.2 16 28 17.8 28 20 28 22.2 26.2 24 24 24 21.8 24 20 22.2 20 20 20 17.8 21.8 16 24 16Z" />
        <path d="M23 21C23.6 21 24 20.6 24 20 24.6 20 25 19.6 25 19 25 18.4 24.6 18 24 18 22.9 18 22 18.9 22 20 22 20.6 22.4 21 23 21Z" />
        <path d="M47 0L1 0C0.4 0 0 0.4 0 1L0 8C0 10.2 1.8 12 4 12L4 16C4 27 13 36 24 36 35 36 44 27 44 16L44 12C46.2 12 48 10.2 48 8L48 1C48 0.4 47.6 0 47 0ZM42 16C42 25.9 33.9 34 24 34 14.1 34 6 25.9 6 16L6 12 18.1 12C15.6 13.8 14 16.7 14 20 14 25.5 18.5 30 24 30 29.5 30 34 25.5 34 20 34 16.7 32.4 13.8 29.9 12L42 12 42 16ZM24 12C28.4 12 32 15.6 32 20 32 24.4 28.4 28 24 28 19.6 28 16 24.4 16 20 16 15.6 19.6 12 24 12ZM46 8C46 9.1 45.1 10 44 10L4 10C2.9 10 2 9.1 2 8L2 2 46 2 46 8Z" />
        <circle cx="37" cy="15" r="1" />
      </g>
    </svg>
  </div>
);

const IconTypeCam = withBemMod('Icon', { type: 'camera' }, IconCam);

export default IconTypeCam;
