import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn, classnames } from '@bem-react/classname';

import Icon from '../../Icon/index';

import closeImage from '../../../assets/icons/cross.svg';
import linkImage from '../../../assets/icons/next.svg';

const cnEvent = cn('Event');

const EventPicture: ModBody = (EventBase, {
  className,
  titleEvent,
  titleDevice,
  time,
  description,
  imageSrc,
  imageAlt
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
        <div className={cnEvent('Picture')}>
          <img
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
      </div>
    </div>
  </div>
);


const EventTypePicture = withBemMod(`${cnEvent()}`, { type: 'picture' }, EventPicture);
export default EventTypePicture;
