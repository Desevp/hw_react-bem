import * as React from 'react';
import { cn, classnames } from '@bem-react/classname';
import './style.scss';

import Icon from '../Icon/index';

import closeImage from '../../assets/icons/cross.svg';
import linkImage from '../../assets/icons/next.svg';

type Props = {
  className: string,
  iconType: string,
  titleEvent: string,
  titleDevice: string,
  time: string,
  description: string
};

const cnEvent = cn('Event');

const EventBase = (props: Props) => {
  const { className, iconType, titleEvent, titleDevice, time, description } = props;
  return (
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
      {description && (
        <div className={cnEvent('Content')}>
          <div className={cnEvent('ContentInner')}>
            <div className={cnEvent('Description')}>
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventBase;
