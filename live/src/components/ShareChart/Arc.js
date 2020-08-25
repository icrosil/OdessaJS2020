import React from 'react';
import * as PropTypes from 'prop-types';

export function Arc({ componentId, chords, color, arc }) {
  // TODO: add filter
  return (
    <g>
      <g>
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
