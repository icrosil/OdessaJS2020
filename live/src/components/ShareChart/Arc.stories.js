import React from 'react';
import { chord } from 'd3-chord';
import { descending } from 'd3-array';
import { scaleOrdinal } from 'd3-scale';
import { arc } from 'd3-shape';

import { Arc } from './Arc';

export default {
  title: 'Chart/ShareChart/Arc',
  component: Arc,
};

const matrix = [
  [0, 0.6871, 0.8916, 0.2868, 0.3425],
  [0.1951, 0.0, 0.206, 0.6171, 0.454],
  [0.801, 0.1145, 0.0, 0.8045, 0.763],
  [0.1013, 0.99, 0.94, 0.0, 0.3664],
  [0.46, 0.4323, 0.3423, 0.2342, 0.0],
];

const chords = chord().padAngle(0).sortSubgroups(descending)(matrix);

const radius = 50;

const groupColors = ['#17c3af', '#F00576', '#0C7CD3', '#8B14B0', '#0A5A73'];

const color = scaleOrdinal().range(groupColors);

const arcD3 = arc()
  .innerRadius(radius)
  .outerRadius(radius + 20);

export const SimpleArc = () => (
  <svg width={200} height={200} viewBox="-100 -100 200 200">
    <Arc componentId={2} color={color} innerRadius={radius} chords={chords} arc={arcD3} />
  </svg>
);
