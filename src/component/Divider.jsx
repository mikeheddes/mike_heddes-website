import PropTypes from 'prop-types'
import styled from 'styled-components'

import { marginPropTypes, setMargin } from '../style/margin'

const Divider = styled.hr`
  display: block;
  height: auto;
  border-bottom: 0;
  border-left: 0;
  border-right-style: solid;
  border-top-style: solid;
  border-color: gray;
  border-width: ${({ size }) => size}px;
  ${setMargin};
`

Divider.propTypes = {
  size: PropTypes.number,
  ...marginPropTypes,
}

Divider.defaultProps = {
  size: 2,
}

export default Divider
