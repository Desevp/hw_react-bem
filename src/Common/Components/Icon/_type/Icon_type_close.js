import React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import statsImg from '../../../assets/icons/cross.svg';

const IconStats: ModBody = (IconBase, { className }) => (
  <div className={className}>
    <img src={statsImg} alt="stats" />
  </div>
);

const IconTypeStats = withBemMod('Icon', { type: 'close' }, IconStats);

export default IconTypeStats;
