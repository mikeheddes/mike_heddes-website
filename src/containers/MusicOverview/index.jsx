import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Banner from 'components/Banner';
import ContentHighlight from 'containers/ContentHighlight/Loadable';
import ContentGrid from 'containers/ContentGrid';
import { colorNames } from 'style/color';
import Card from 'components/Card';
import { visibilities } from 'actions/music';
import { contentTypes } from 'actions/utils';


const filters = [
  {
    name: 'All music',
    action: visibilities.all,
  },
  {
    name: 'Podcasts',
    action: visibilities.podcasts,
  },
  {
    name: 'Albums',
    action: visibilities.albums,
  },
  {
    name: 'Singles',
    action: visibilities.singles,
  },
];

export default class MusicOverview extends Component {
  static propTypes = {
    bannerLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ),
    color: PropTypes.oneOf(colorNames),
    match: PropTypes.shape({
      params: PropTypes.shape({
        contentType: PropTypes.oneOf(contentTypes).isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {
    bannerLinks: [
      {
        name: 'Spotify',
        href: 'https://spotify.com',
      },
      {
        name: 'Apple Music',
        href: 'https://www.apple.com/apple-music/',
      },
      {
        name: 'YouTube',
        href: 'https://youtube.com',
      },
      {
        name: 'SoundCloud',
        href: 'https://soundcloud.com',
      },
    ],
    color: 'pink',
  };

  setTheme = (theme) => {
    const { color } = this.props;
    return {
      ...theme,
      link: theme[color],
      surface: theme.surfaceColors[color],
    };
  };

  render() {
    const { bannerLinks, match } = this.props;
    const { contentType } = match.params;
    return (
      <ThemeProvider theme={this.setTheme}>
        <React.Fragment>
          <Banner links={bannerLinks}>
            <h2>
              Music
            </h2>
            <h1>
              Like You Have
              <br />
              Never Heard.
            </h1>
          </Banner>
          <ContentHighlight
            actionTitle="More info"
            contentType={contentType}
            eyebrow="Latest music"
            externalActionTitle="Listen on"
            highlightType="latest"
            marginTop
          />
          <ContentGrid
            contentType={contentType}
            title="All music"
            filters={filters}
            phoneColumns={2}
            tabletPortraitColumns={3}
            tabletLandscapeColumns={4}
            desktopColumns={5}
          >
            {items => items.map(item => (
              <Card
                key={item.id}
                square
                maxTitleLines={1}
                maxDescriptionLines={1}
                to={`/${contentType}/${item.id}`}
                title={item.title}
                image={item.coverImage || item.heroImage}
              >
                {item.artist}
              </Card>
            ))
            }
          </ContentGrid>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
