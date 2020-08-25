import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';

import useStyles from './styles';

// function degreeToRadian(degree) {
//   return (degree / 180) * Math.PI;
// }

export function Ribbon({ chords, ribbon }) {
  const classes = useStyles();
  const [, setMouseOverChord] = useState(null);

  return (
    <g>
      {chords.map(d => {
        // TODO: add gradient
        return (
          <g key={`${d.source.index}-${d.target.index}`}>
            <path
              onMouseOver={() => setMouseOverChord(`${d.source.index}-${d.target.index}`)}
              onMouseOut={() => setMouseOverChord(null)}
              id={`ribbon-${d.source.index}-${d.target.index}`}
              className={clsx(classes.ribbon)}
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
