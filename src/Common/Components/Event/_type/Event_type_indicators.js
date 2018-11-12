import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn, classnames } from '@bem-react/classname';

import Icon from '../../Icon/index';
import Indicators from '../../Indicators';

import closeImage from '../../../assets/icons/cross.svg';
import linkImage from '../../../assets/icons/next.svg';

const cnEvent = cn('Event');

const EventIndicators: ModBody = (EventBase, {
  className,
  titleEvent,
  titleDevice,
  time,
  description,
  temperatureValue,
  humidityValue
}) => (
  <div className={classnames(className, cnEvent())}>
    <div className={cnEvent('Inner')}>
      <div className={cnEvent('Top')}>
        <Icon className={cnEvent('Icon')} type="stats" />
        <div className={cnEvent('Title')}>
          {titleEvent}
        </div>
      </div>
      <div className={cnEvent('Info')}>
        <div className={cnEvent('Device')}>
          {titleDevice}
        </div>
        <div className={cnEvent('Time')}>
          {time}
        </div>
      </div>
      <div className={cnEvent('Control', { type: 'close' })}>
        <img src={closeImage} alt="close" />
      </div>
      <div className={cnEvent('Control', { type: 'link' })}>
        <img src={linkImage} alt="next" />
      </div>
    </div>
    <div className={cnEvent('Content')}>
      <div className={cnEvent('ContentInner')}>
        {description && (
          <div className={cnEvent('Description')}>
            {description}
          </div>
        )}
        <Indicators
          temperatureValue={temperatureValue}
          humidityValue={humidityValue}
          className={cnEvent('Indicators')}
        />
      </div>
    </div>
  </div>
);


const EventTypeIndicators = withBemMod(`${cnEvent()}`, { type: 'indicators' }, EventIndicators);
export default EventTypeIndicators;
