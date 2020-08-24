import React from 'react';

import { ShareChart } from './ShareChart';
import { matrix } from './mock';

export default {
  title: 'Chart/ShareChart',
  component: ShareChart,
};

export const SimpleShare = () => <ShareChart radius={70} matrix={matrix} />;
