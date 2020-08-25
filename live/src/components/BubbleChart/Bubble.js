import React from 'react';
import * as PropTypes from 'prop-types';

import { useBubbleStyles } from './style';

export function Bubble({ cx, cy, item, radius, border, patternName, hoveredMode, isHovered, onHover }) {
  const classes = useBubbleStyles({ cx, cy });

  const showLabel = radius > 20;

  const opacity = hoveredMode ? 0.4 : 0;

  return (
    <g className={classes.bubble}>
      <circle
        r={radius}
        stroke={item.pattern && border ? border : undefined}
        strokeWidth={2}
        fill={item.pattern ? `url(#${patternName})` : `rgba(23,195,175, ${isHovered ? '1' : '0.25'})`}
      />
      {showLabel && (
        <text className={classes.text} fontSize={10} fill={'white'} textAnchor="middle">
          {item.name}
        </text>
      )}
      <circle
        r={radius}
        fill={`rgba(255, 255, 255, ${opacity})`}
        onMouseEnter={() => onHover(item)}
        onMouseLeave={() => onHover(null)}
      />
    </g>
  );
}

Bubble.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  item: PropTypes.shape({
    pattern: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  radius: PropTypes.number.isRequired,
  border: PropTypes.string,
  patternName: PropTypes.string,
  hoveredMode: PropTypes.bool,
  isHovered: PropTypes.bool,
  onHover: PropTypes.func.isRequired,
};

Bubble.defaultProps = {
  item: {},
};
