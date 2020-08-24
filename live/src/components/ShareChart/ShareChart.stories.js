import React from 'react';

import { ShareChart } from './ShareChart';

export default {
  title: 'Chart/ShareChart',
  component: ShareChart,
};

export const SimpleShare = args => <ShareChart {...args} />;
