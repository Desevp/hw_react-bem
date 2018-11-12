import React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';

const IconBattery: ModBody = (IconBase, { className }) => (
  <div className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="25" viewBox="0 0 48 25">
      <title>
        battery
      </title>
      <g>
        <path d="M42.7 0L10.2 0C7.3 0 4.9 2.4 4.9 5.3L4.9 6.1 3.2 6.1C1.4 6.1 0 7.5 0 9.3L0 14.8C0 16.6 1.4 18 3.2 18L4.9 18 4.9 18.8C4.9 21.7 7.3 24.1 10.2 24.1L42.7 24.1C45.6 24.1 48 21.7 48 18.8L48 5.3C48 2.4 45.6 0 42.7 0ZM3.2 15.9C2.6 15.9 2.1 15.4 2.1 14.8L2.1 9.3C2.1 8.7 2.6 8.2 3.2 8.2L4.9 8.2 4.9 15.9 3.2 15.9ZM45.9 18.8C45.9 20.6 44.5 22 42.7 22L10.2 22C8.5 22 7 20.6 7 18.8L7 5.3C7 3.5 8.5 2.1 10.2 2.1L42.7 2.1C44.5 2.1 45.9 3.5 45.9 5.3L45.9 18.8Z" />
        <path d="M19.6 11L17.8 11 17.8 9.2C17.8 8.6 17.3 8.1 16.7 8.1 16.1 8.1 15.7 8.6 15.7 9.2L15.7 11 13.8 11C13.2 11 12.8 11.5 12.8 12.1 12.8 12.6 13.2 13.1 13.8 13.1L15.7 13.1 15.7 14.9C15.7 15.5 16.1 16 16.7 16 17.3 16 17.8 15.5 17.8 14.9L17.8 13.1 19.6 13.1C20.2 13.1 20.7 12.6 20.7 12.1 20.7 11.5 20.2 11 19.6 11Z" />
        <path d="M38.6 8.1C38 8.1 37.5 8.6 37.5 9.2L37.5 14.9C37.5 15.5 38 16 38.6 16 39.1 16 39.6 15.5 39.6 14.9L39.6 9.2C39.6 8.6 39.1 8.1 38.6 8.1Z" />
      </g>
    </svg>
  </div>
);

const IconTypeBattery = withBemMod('Icon', { type: 'battery' }, IconBattery);

export default IconTypeBattery;
