import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet-async'

import Banner from '../Banner'
// import ContentHighlight from 'containers/ContentHighlight/Loadable'
// import ContentGrid from 'containers/ContentGrid/Loadable'
import { colorNames } from '../../styles/color'
// import Card from 'components/Card'
// import { visibilities } from 'actions/music'
// import { contentTypes } from 'actions/content'

// const filters = [
//   {
//     name: 'All music',
//     action: visibilities.all,
//   },
//   {
//     name: 'Podcasts',
//     action: visibilities.podcasts,
//   },
//   {
//     name: 'Albums',
//     action: visibilities.albums,
//   },
//   {
//     name: 'Singles',
//     action: visibilities.singles,
//   },
// ]

export default class Music extends Component {
  static propTypes = {
    bannerLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    color: PropTypes.oneOf(colorNames),
    // match: PropTypes.shape({
    //   params: PropTypes.shape({
    //     contentType: PropTypes.oneOf(contentTypes).isRequired,
    //   }).isRequired,
    // }).isRequired,
  }

  static defaultProps = {
    bannerLinks: [
      {
        name: 'Spotify',
        url: 'https://open.spotify.com/artist/4kQdT4uFc2e0zHL755qJ0U',
      },
      {
        name: 'Apple Music',
        url: 'https://itunes.apple.com/nl/artist/mike-heddes/1185471953',
      },
      {
        name: 'YouTube',
        url: 'https://youtube.com/mikeheddes',
      },
      {
        name: 'SoundCloud',
        url: 'https://soundcloud.com/mikeheddes',
      },
    ],
    color: 'pink',
  }

  setTheme = theme => {
    const { color } = this.props
    return {
      ...theme,
      link: theme[color],
      surface: theme.surfaceColors[color],
    }
  }

  render() {
    const { bannerLinks } = this.props
    return (
      <ThemeProvider theme={this.setTheme}>
        <React.Fragment>
          <Helmet>
            <title>Music</title>
          </Helmet>
          <Banner actions={bannerLinks} eyebrow="Music">
            Like You Have
            <br />
            Never Heard.
          </Banner>
          {/* <ContentHighlight
            noFetch
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
            {items =>
              items.map(item => (
            <Card
            key={item.id}
            shape="square"
            maxTitleLines={1}
            maxDescriptionLines={1}
            to={`/${contentType}/${item.id}`}
            title={item.title}
            image={item.imageCover || item.imageHero}
            >
            {item.artist}
            </Card>
              ))
            }
          </ContentGrid> */}
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
