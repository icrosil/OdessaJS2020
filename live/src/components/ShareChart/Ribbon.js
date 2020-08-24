import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { arc } from 'd3-shape';
import clsx from 'clsx';

import useStyles from './styles';

function degreeToRadian(radian) {
  return (radian / 180) * Math.PI;
}

export function Ribbon({ chords, color, ribbon, innerRadius, mouseOverGroup }) {
  const classes = useStyles();
  const [mouseOverChord, setMouseOverChord] = useState(null);

  return (
    <g>
      {chords.map(d => {
        const arcD3 = arc().innerRadius(innerRadius).outerRadius(innerRadius);
        const sourceAngles = arcD3.centroid(d.source);
        const targetAngles = arcD3.centroid(d.target);
        const [x1, y1] = sourceAngles.map(degreeToRadian);
        const [x2, y2] = targetAngles.map(degreeToRadian);

        const isActiveChord =
          mouseOverGroup === d.source.index ||
          mouseOverGroup === d.target.index ||
          `${d.source.index}-${d.target.index}` === mouseOverChord;

        return (
          <g key={`${d.source.index}-${d.target.index}`}>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id={`gradient-${d.source.index}-${d.target.index}`}
                x1={innerRadius * x1}
                y1={innerRadius * y1}
                x2={innerRadius * x2}
                y2={innerRadius * y2}
              >
                <stop offset="0%" stopColor={color(d.source.index)} />
                <stop offset="100%" stopColor={color(d.target.index)} />
              </linearGradient>
            </defs>
            <path
              onMouseOver={() => setMouseOverChord(`${d.source.index}-${d.target.index}`)}
              id={`ribbon-${d.source.index}-${d.target.index}`}
              key={`ribbon-${d.source.index}-${d.target.index}`}
              className={clsx(classes.ribbon, {
                [classes.ribbonActive]: isActiveChord,
              })}
              fill={`url(#gradient-${d.source.index}-${d.target.index})`}
              d={`${ribbon({ source: d.source, target: d.target })}`}
            />
          </g>
        );
      })}
      <use onMouseOut={() => setMouseOverChord(null)} href={`#ribbon-${mouseOverChord}`} />
    </g>
  );
}

Ribbon.propTypes = {
  chords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  color: PropTypes.func.isRequired,
  ribbon: PropTypes.func.isRequired,
  innerRadius: PropTypes.number.isRequired,
  mouseOverGroup: PropTypes.number.isRequired,
};
