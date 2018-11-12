import { compose } from '@bem-react/core';

import IconBase from './Icon';
import IconTypeStats from './_type/Icon_type_stats';
import IconTypesKey from './_type/Icon_type_key';
import IconTypesRobot from './_type/Icon_type_robot';
import IconTypeRouter from './_type/Icon_type_router';
import IconTypeThermal from './_type/Icon_type_thermal';
import IconTypeAc from './_type/Icon_type_ac';
import IconTypeMusic from './_type/Icon_type_music';
import IconFridge from './_type/Icon_type_fridge';
import IconBattery from './_type/Icon_type_battery';
import IconKettle from './_type/Icon_type_kettle';
import IconCam from './_type/Icon_type_cam';

const Icon = compose(
  IconTypeStats,
  IconTypesKey,
  IconTypesRobot,
  IconTypeRouter,
  IconTypeThermal,
  IconTypeAc,
  IconTypeMusic,
  IconFridge,
  IconBattery,
  IconKettle,
  IconCam
)(IconBase);

export default Icon;
