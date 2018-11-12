import React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import statsImg from '../../../assets/icons/stats.svg';

const IconStats: ModBody = (IconBase, { className }) => (
  <div className={className}>
    <svg>{statsImg}</svg>
  </div>
);

const IconTypeStats = withBemMod('Icon', { type: 'stats' }, IconStats);

export default IconTypeStats;
