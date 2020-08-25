import React from 'react';

import { BubbleChart } from './BubbleChart';
import { generateData } from './mock';

export default {
  title: 'Chart/BubbleChart/BubbleChart',
  component: BubbleChart,
};

export const BubbleSimple = () => <BubbleChart height={200} width={200} data={generateData(200, 200)}></BubbleChart>;
