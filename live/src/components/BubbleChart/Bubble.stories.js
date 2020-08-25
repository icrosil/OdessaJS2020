import React from 'react';

import { Bubble } from './Bubble';

export default {
  title: 'Chart/BubbleChart/Bubble',
  component: Bubble,
};

export const BubbleSimple = () => (
  <svg width={200} height={200}>
    <Bubble
      cx={50}
      cy={50}
      radius={15}
      item={{
        name: 'bubble',
      }}
    ></Bubble>
  </svg>
);
