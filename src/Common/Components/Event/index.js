import { compose } from '@bem-react/core';

import EventBase from './Event';
import EventCritical from './_mode/Event_type_critical';
import EventPicture from './_type/Event_type_picture';
import EventIndicators from './_type/Event_type_indicators';

const Event = compose(
  EventCritical,
  EventPicture,
  EventIndicators
)(EventBase);

export default Event;
