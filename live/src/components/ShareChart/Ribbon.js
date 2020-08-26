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
      {chords.map(chord => {
        const chordId = `${chord.source.index}-${chord.target.index}`;
        return (
          <g key={chordId}>
            <path
              onMouseOver={() => setMouseOverChord(chordId)}
              onMouseOut={() => setMouseOverChord(null)}
              className={clsx(classes.ribbon)}
              d={ribbon(chord)}
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
