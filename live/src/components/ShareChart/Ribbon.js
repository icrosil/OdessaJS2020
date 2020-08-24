import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { arc } from 'd3-shape';
import clsx from 'clsx';

import useStyles from './styles';
import { LinearGradient } from '../SVG/LinearGradient';

function degreeToRadian(degree) {
  return (degree / 180) * Math.PI;
}

export function Ribbon({ chords, color, ribbon, innerRadius }) {
  const classes = useStyles();
  const [mouseOverChord, setMouseOverChord] = useState(null);
  const arcD3 = arc().innerRadius(innerRadius).outerRadius(innerRadius);

  return (
    <g>
      {chords.map(d => {
        const sourceAngles = arcD3.centroid(d.source);
        const targetAngles = arcD3.centroid(d.target);
        const [x1, y1] = sourceAngles.map(degreeToRadian);
        const [x2, y2] = targetAngles.map(degreeToRadian);

        const isActiveChord = `${d.source.index}-${d.target.index}` === mouseOverChord;
        const gradientId = `gradient-${d.source.index}-${d.target.index}`;
        return (
          <g key={`${d.source.index}-${d.target.index}`}>
            <LinearGradient
              id={gradientId}
              colorFrom={color(d.source.index)}
              colorTo={color(d.target.index)}
              x1={innerRadius * x1}
              x2={innerRadius * x2}
              y1={innerRadius * y1}
              y2={innerRadius * y2}
            />
            <path
              onMouseOver={() => setMouseOverChord(`${d.source.index}-${d.target.index}`)}
              onMouseOut={() => setMouseOverChord(null)}
              id={`ribbon-${d.source.index}-${d.target.index}`}
              className={clsx(classes.ribbon, {
                [classes.ribbonActive]: isActiveChord,
              })}
              fill={`url(#${gradientId})`}
              d={ribbon(d)}
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
