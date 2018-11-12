import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn, classnames } from '@bem-react/classname';

import Icon from '../../Icon/index';

import closeImage from '../../../assets/icons/cross.svg';
import linkImage from '../../../assets/icons/next.svg';

import Player from '../../Player';

const cnEvent = cn('Event');

const EventMusic: ModBody = (EventBase, {
  className,
  titleEvent,
  titleDevice,
  time,
  albumcover,
  artist,
  trackName,
  trackLenght,
  volume
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
        <Player
          albumcover={albumcover}
          artist={artist}
          trackName={trackName}
          trackLenght={trackLenght}
          volume={volume}
        />
      </div>
    </div>
  </div>
);


const EventTypeMusic = withBemMod(`${cnEvent()}`, { type: 'music' }, EventMusic);
export default EventTypeMusic;
