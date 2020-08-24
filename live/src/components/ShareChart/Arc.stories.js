import React from 'react';
import { chord } from 'd3-chord';
import { descending } from 'd3-array';
import { scaleOrdinal } from 'd3-scale';
import { arc } from 'd3-shape';

import { Arc } from './Arc';
import { matrix } from './mock';
import { groupColors } from './styles';

export default {
  title: 'Chart/ShareChart/Arc',
  component: Arc,
};

const chords = chord().padAngle(0).sortSubgroups(descending)(matrix);

const radius = 50;

const color = scaleOrdinal().range(groupColors);

const arcD3 = arc()
  .innerRadius(radius)
  .outerRadius(radius + 20);

export const SimpleArc = () => (
  <svg width={200} height={200} viewBox="-100 -100 200 200">
    <Arc componentId={2} color={color} innerRadius={radius} chords={chords} arc={arcD3} />
  </svg>
);
