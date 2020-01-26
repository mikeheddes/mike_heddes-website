import React from 'react'
import styled from 'styled-components'

import { screen } from '../styles/breakpoints'
import { fluidFont, contentWrapper } from '../styles'
import { dateFormatter } from '../shared/formatters'

const Wrapper = styled.header`
  ${contentWrapper};
  text-align: center;
  margin-top: 15px;
  padding-top: 30px;
  padding-bottom: 30px;

  @media ${screen.md} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

const Title = styled.h1`
  ${fluidFont(34, 63)};
  color: var(--heading-obvious);
  line-height: 1.3;
  font-weight: 700;
  margin: 0;
  margin-bottom: 20px;

  @media ${screen.md} {
    margin-bottom: 30px;
  }
`

const DateLocation = styled.h4`
  ${fluidFont(18, 21)};
  color: var(--text-subtle);
  line-height: 1.3;
  font-weight: 600;
`

const TitleView = ({ title, genre, date }) => (
  <Wrapper>
    <Title>{title}</Title>
    <DateLocation>
      {dateFormatter.format(new Date(date))} ― {genre}
    </DateLocation>
  </Wrapper>
)

export default React.memo(TitleView)
