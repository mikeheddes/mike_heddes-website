import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Image from 'components/Image';
import space from 'style/space';
import { media, fluidText } from 'utils/mixins';
import Link from 'components/Link';

// stylelint-disable property-no-vendor-prefix, value-no-vendor-prefix, declaration-block-no-duplicate-properties
const Title = styled.h2`
  ${({ size }) => size === 'r' && fluidText(16, 18)};
  ${({ size }) => size === 'm' && fluidText(20, 22)};
  font-weight: 700;
  color: ${({ theme }) => theme.heading};
  margin-top: ${space.r}px;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${({ maxLines }) => maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.phoneOnly(css`
    margin-top: ${space.s}px;
    font-weight: 600;
  `)};
`;

const Description = styled.p`
  ${({ size }) =>
    size === 'r' &&
    css`
      font-size: 15px;
    `};
  ${({ size }) => size === 'm' && fluidText(16, 17)};
  margin-top: ${space.s}px;
  color: ${({ theme }) => theme.textSubtle};
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${({ maxLines }) => maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.phoneOnly(css`
    margin-top: ${space.xs}px;
  `)};
`;

const Card = props => {
  const {
    title,
    image,
    children,
    badge,
    shape,
    size,
    maxTitleLines,
    maxDescriptionLines,
    to,
    preload,
  } = props;
  const LinkWrapper = to ? Link : React.Fragment;
  return (
    <div onMouseEnter={preload}>
      <LinkWrapper
        {...to && {
          noInner: true,
          noIcon: true,
          to,
          noTheme: true,
        }}
      >
        <Image {...image} rounded shape={shape} badge={badge} />
        <Title size={size} maxLines={maxTitleLines}>
          {title}
        </Title>
      </LinkWrapper>
      <Description size={size} maxLines={maxDescriptionLines}>
        {children}
      </Description>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  badge: PropTypes.string,
  maxTitleLines: PropTypes.number,
  maxDescriptionLines: PropTypes.number,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.oneOf(['r', 'm']),
  children: PropTypes.node,
  preload: PropTypes.func,
  to: PropTypes.string,
  shape: PropTypes.string,
};

Card.defaultProps = {
  maxTitleLines: 2,
  badge: undefined,
  maxDescriptionLines: 3,
  children: null,
  preload: undefined,
  size: 'r',
  to: undefined,
  shape: undefined,
};

export default Card;
