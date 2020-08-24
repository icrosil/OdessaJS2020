import React from 'react';
import { chord, ribbon } from 'd3-chord';
import { descending } from 'd3-array';
import { scaleOrdinal } from 'd3-scale';
import { arc } from 'd3-shape';
import { Arc } from './Arc';
import { Ribbon } from './Ribbon';

const groupColors = ['#17c3af', '#F00576', '#0C7CD3', '#8B14B0', '#0A5A73'];

export function ShareChart({ matrix, radius }) {
  const chords = chord().padAngle(0).sortSubgroups(descending)(matrix);

  const color = scaleOrdinal().range(groupColors);

  const arcD3 = arc()
    .innerRadius(radius)
    .outerRadius(radius + 20);

  const ribbonD3 = ribbon().radius(radius);

  return (
    <svg width="200" height="200" viewBox="-100 -100 200 200">
      <Arc componentId={2} color={color} innerRadius={radius} chords={chords} arc={arcD3}></Arc>
      <Ribbon color={color} ribbon={ribbonD3} innerRadius={radius} chords={chords} arc={arcD3}></Ribbon>
    </svg>
  );
}
