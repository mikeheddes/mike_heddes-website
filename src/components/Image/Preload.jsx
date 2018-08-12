import styled from 'styled-components';
import { animated } from 'react-spring';

export default styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-clip: border-box;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  border-radius: ${({ radius }) => radius}px;
  overflow: hidden;
  background-image: url(${({ image }) => image});
  ${'' /* transition: opacity 150ms ease-out 150s; */}
  ${'' /* opacity: ${({ loaded }) => Number(!loaded)}; */}
  ${'' /* filter: blur(20px); */}
`;
