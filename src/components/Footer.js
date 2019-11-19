import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

import { fluidFont } from '../styles/mixins'

const Wrapper = styled.footer`
  width: 100%;
  display: block;
  text-align: center;
  color: var(--text-subtle);
  ${fluidFont(9, 10)};
  font-weight: 400;
  padding: 20px;
  margin-top: 50px;

  ${up('sm')} {
    font-weight: 500;
  }
`

const Footer = () => (
  <Wrapper>
    Copyright © {new Date().getFullYear()} Mike Heddes. All rights reserved.
  </Wrapper>
)

export default Footer
