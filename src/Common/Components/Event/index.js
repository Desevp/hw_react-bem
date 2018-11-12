import { compose } from '@bem-react/core';

import EventBase from './Event';
import EventCritical from './_mode/Event_type_critical';
import EventPicture from './_type/Event_type_picture';
import EventIndicators from './_type/Event_type_indicators';
import EventMusic from './_type/Event_type_music';

const Event = compose(
  EventCritical,
  EventPicture,
  EventIndicators,
  EventMusic
)(EventBase);

export default Event;
