import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import { arc as arcD3 } from 'd3-shape';

import useStyles from './styles';

import { LinearGradient } from '../SVG/LinearGradient';

function degreeToRadian(degree) {
  return (degree / 180) * Math.PI;
}

export function Ribbon({ chords, ribbon, color, innerRadius }) {
  const classes = useStyles();
  const [mouseOverChord, setMouseOverChord] = useState(null);
  const arc = arcD3().innerRadius(innerRadius).outerRadius(innerRadius);

  return (
    <g>
      {chords.map(chord => {
        const sourceAngle = arc.centroid(chord.source);
        const targetAngle = arc.centroid(chord.target); // [startAngle, endAngle]
        const [x1, y1] = sourceAngle.map(degreeToRadian);
        const [x2, y2] = targetAngle.map(degreeToRadian);
        const chordId = `${chord.source.index}-${chord.target.index}`;
        const linearGradientId = `gradient-${chordId}`;
        return (
          <g key={chordId}>
            <LinearGradient
              x1={x1 * innerRadius}
              x2={x2 * innerRadius}
              y1={y1 * innerRadius}
              y2={y2 * innerRadius}
              id={linearGradientId}
              colorFrom={color(chord.source.index)}
              colorTo={chord.target.index}
            ></LinearGradient>
            <path
              onMouseOver={() => setMouseOverChord(chordId)}
              onMouseOut={() => setMouseOverChord(null)}
              className={clsx(classes.ribbon, {
                [classes.ribbonActive]: mouseOverChord === chordId,
              })}
              d={ribbon(chord)}
              fill={`url(#${linearGradientId})`}
            />
          </g>
        );
      })}
    </g>
  );
}

Ribbon.propTypes = {
  chords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  color: PropTypes.func.isRequired,
  ribbon: PropTypes.func.isRequired,
  innerRadius: PropTypes.number.isRequired,
};
