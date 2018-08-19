import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Spring, animated } from 'react-spring';

const Svg = styled.svg`
  display: inline-block;
  height: 1em;
  vertical-align: sub;
  stroke: currentColor;
  fill: none;
  stroke-miterlimit: 10;
  stroke-width: 8px;
`;

const coordinate = {
  cross: {
    top: {
      x1: 0,
      x2: 85,
      y1: 24.5,
      y2: 24.5,
    },
    bottom: {
      x1: 0,
      x2: 85,
      y1: 59.5,
      y2: 59.5,
    },
  },
  burger: {
    top: {
      x1: 12.5,
      x2: 75.6,
      y1: 20.05,
      y2: 80.1,
    },
    bottom: {
      x1: 12.5,
      x2: 75.6,
      y1: 80.1,
      y2: 20.05,
    },
  },
};

const MenuSVG = ({ checked }) => {
  const { burger, cross } = coordinate;
  return (
    <Spring
      native
      from={{
        tx1: cross.top.x1,
        tx2: cross.top.x2,
        ty1: cross.top.y1,
        ty2: cross.top.y2,
        bx1: cross.bottom.x1,
        bx2: cross.bottom.x2,
        by1: cross.bottom.y1,
        by2: cross.bottom.y2,
      }}
      to={{
        tx1: checked ? burger.top.x1 : cross.top.x1,
        tx2: checked ? burger.top.x2 : cross.top.x2,
        ty1: checked ? burger.top.y1 : cross.top.y1,
        ty2: checked ? burger.top.y2 : cross.top.y2,
        bx1: checked ? burger.bottom.x1 : cross.bottom.x1,
        bx2: checked ? burger.bottom.x2 : cross.bottom.x2,
        by1: checked ? burger.bottom.y1 : cross.bottom.y1,
        by2: checked ? burger.bottom.y2 : cross.bottom.y2,
      }}
    >
      {({ tx1, tx2, ty1, ty2, bx1, bx2, by1, by2 }) => (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">
          <title>{checked ? 'show menu icon' : 'hide menu icon'}</title>
          <animated.line x1={tx1} y1={ty1} x2={tx2} y2={ty2} />
          <animated.line x1={bx1} y1={by1} x2={bx2} y2={by2} />
        </Svg>
      )}
    </Spring>
  );
};

MenuSVG.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default MenuSVG;
