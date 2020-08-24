import React from 'react';
import * as PropTypes from 'prop-types';

import { ShadowFilter } from '../SVGFilter/Shadow';

export function Arc({ componentId, chords, color, arc }) {
  const filterId = 'dropshadow';
  return (
    <g>
      <ShadowFilter id={filterId} />
      <g filter={`url(#${filterId})`}>
        {chords.groups.map(group => {
          return (
            <g key={group.index}>
              <path fill={color(group.index)} id={`component${componentId}-group${group.index}`} d={arc(group)} />
            </g>
          );
        })}
      </g>
    </g>
  );
}

Arc.propTypes = {
  componentId: PropTypes.number.isRequired,
  chords: PropTypes.shape({
    groups: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  color: PropTypes.func.isRequired,
  arc: PropTypes.func.isRequired,
};
