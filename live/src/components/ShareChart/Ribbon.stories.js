import React from 'react';
import { chord, ribbon } from 'd3-chord';
import { descending } from 'd3-array';
import { scaleOrdinal } from 'd3-scale';

import { Ribbon } from './Ribbon';
import { matrix } from './mock';
import { groupColors } from './styles';

export default {
  title: 'Chart/ShareChart/Ribbon',
  component: Ribbon,
};

const chords = chord().padAngle(0).sortSubgroups(descending)(matrix);

const radius = 100;

const color = scaleOrdinal().range(groupColors);

const ribbonD3 = ribbon().radius(radius);

export const SimpleRibbon = () => (
  <svg width={200} height={200} viewBox="-100 -100 200 200">
    <Ribbon color={color} ribbon={ribbonD3} innerRadius={radius} chords={chords} />
  </svg>
);
