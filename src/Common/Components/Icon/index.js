import { compose } from '@bem-react/core';

import IconBase from './Icon';
import IconTypeStats from './_type/Icon_type_stats';
import IconTypesKey from './_type/Icon_type_key';
import IconTypesRobot from './_type/Icon_type_robot';
import IconTypeRouter from './_type/Icon_type_router';
import IconTypeThermal from './_type/Icon_type_thermal';
import IconTypeAc from './_type/Icon_type_ac';

const Icon = compose(
  IconTypeStats,
  IconTypesKey,
  IconTypesRobot,
  IconTypeRouter,
  IconTypeThermal,
  IconTypeAc
)(IconBase);

export default Icon;
