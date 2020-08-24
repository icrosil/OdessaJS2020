import React from 'react';

import { ShareChart } from './ShareChart';

export default {
  title: 'Chart/ShareChart',
  component: ShareChart,
};

const matrix = [
  [0, 0.6871, 0.8916, 0.2868, 0.3425],
  [0.1951, 0.0, 0.206, 0.6171, 0.454],
  [0.801, 0.1145, 0.0, 0.8045, 0.763],
  [0.1013, 0.99, 0.94, 0.0, 0.3664],
  [0.46, 0.4323, 0.3423, 0.2342, 0.0],
];

export const SimpleShare = () => <ShareChart radius={70} matrix={matrix} />;
