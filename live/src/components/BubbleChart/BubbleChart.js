import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Bubble } from './Bubble';
import { palette } from './style';

export function BubbleChart({ height, width, data }) {
  const [hovered, onHover] = useState();
  // TODO: убрать пересечения

  return (
    <svg width={width} height={height} style={{ overflow: 'visible', position: 'relative' }}>
      {palette.map((item, index) => (
        <defs key={`${item.border}-${item.color}`}>
          <pattern
            id={`pattern${index}`}
            width="6"
            height="2"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(135 130 130)"
          >
            <rect x="0" y="0" width="10" height="2" fill={item.color} />
            <line stroke={item.border} strokeWidth="2px" y2="10" />
          </pattern>
        </defs>
      ))}

      {data.map(item => {
        const { border } = item.pattern ? palette[item.pattern] : { border: null };

        const patternName = typeof item.pattern === 'number' ? `pattern${item.pattern}` : null;

        const isHovered = Boolean(hovered && hovered.name === item.name);

        return (
          <g key={item.name}>
            <Bubble
              radius={item.r}
              cx={item.x}
              cy={item.y}
              border={border}
              item={item}
              patternName={isHovered ? 'pattern4' : patternName}
              hoveredMode={hovered && !isHovered}
              isHovered={isHovered}
              onHover={onHover}
            />
          </g>
        );
      })}
    </svg>
  );
}

BubbleChart.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
