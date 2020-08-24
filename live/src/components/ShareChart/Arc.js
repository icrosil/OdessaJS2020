import React from 'react';
import * as PropTypes from 'prop-types';

export function Arc({ componentId, chords, color, arc, setMouseOverGroup }) {
  return (
    <g>
      <defs>
        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
          <feOffset dx="5" dy="5" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#dropshadow)">
        {chords.groups.map(group => {
          return (
            <g
              key={group.index}
              onMouseOver={() => setMouseOverGroup(group.index)}
              onMouseOut={() => setMouseOverGroup(null)}
            >
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
  setMouseOverGroup: PropTypes.func.isRequired,
};
