import React from 'react';
import * as PropTypes from 'prop-types';

export function ShadowFilter({ id }) {
  return (
    <defs>
      <filter id={id} height="130%">
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
  );
}

ShadowFilter.propTypes = {
  id: PropTypes.string,
};

ShadowFilter.defaultProps = {
  id: 'dropshadow',
};
