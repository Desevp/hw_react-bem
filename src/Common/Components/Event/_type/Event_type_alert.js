import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn, classnames } from '@bem-react/classname';

import Icon from '../../Icon/index';
import Button from '../../Button/index';

import closeImage from '../../../assets/icons/cross.svg';
import linkImage from '../../../assets/icons/next.svg';

const cnEvent = cn('Event');

const EventAlert: ModBody = (EventBase, {
  className,
  iconType,
  titleEvent,
  titleDevice,
  time,
  description
}) => (
  <div className={classnames(className, cnEvent())}>
    <div className={cnEvent('Inner')}>
      <div className={cnEvent('Top')}>
        <Icon className={cnEvent('Icon')} type={iconType} />
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
        <div className={cnEvent('Alert')}>
          <div className={cnEvent('AlertControls')}>
            <Button text="Да" isMarked className={cnEvent('AlertButton')} />
            <Button text="Нет" className={cnEvent('AlertButton')} />
          </div>
        </div>
      </div>
    </div>
  </div>
);


const EventTypeAlert = withBemMod(`${cnEvent()}`, { type: 'alert' }, EventAlert);
export default EventTypeAlert;
