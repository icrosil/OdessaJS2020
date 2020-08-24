import React from 'react';
import * as PropTypes from 'prop-types';

export function LinearGradient({ x1, x2, y1, y2, id, colorFrom, colorTo }) {
  return (
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id={id} x1={x1} y1={y1} x2={x2} y2={y2}>
        <stop offset="0%" stopColor={colorFrom} />
        <stop offset="100%" stopColor={colorTo} />
      </linearGradient>
    </defs>
  );
}

LinearGradient.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  colorFrom: PropTypes.string.isRequired,
  colorTo: PropTypes.string.isRequired,
};
