import React from 'react';
import { chord, ribbon } from 'd3-chord';
import { descending } from 'd3-array';
import { scaleOrdinal } from 'd3-scale';

import { Ribbon } from './Ribbon';

export default {
  title: 'Chart/ShareChart/Ribbon',
  component: Ribbon,
};

const matrix = [
  [0, 0.6871, 0.8916, 0.2868, 0.3425],
  [0.1951, 0.0, 0.206, 0.6171, 0.454],
  [0.801, 0.1145, 0.0, 0.8045, 0.763],
  [0.1013, 0.99, 0.94, 0.0, 0.3664],
  [0.46, 0.4323, 0.3423, 0.2342, 0.0],
];

const chords = chord().padAngle(0).sortSubgroups(descending)(matrix);

const radius = 100;

const groupColors = ['#17c3af', '#F00576', '#0C7CD3', '#8B14B0', '#0A5A73'];

const color = scaleOrdinal().range(groupColors);

export const SimpleRibbon = () => (
  <svg width={200} height={200} viewBox="-100 -100 200 200">
    <Ribbon color={color} ribbon={ribbon().radius(radius)} innerRadius={radius} chords={chords} />
  </svg>
);
