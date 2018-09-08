import { themes } from 'actions/ui'
import imageCover from 'assets/sick_boy.jpg'

export default {
  genre: 'Pop',
  themeColor: 'purple',
  publishedAt: new Date('2018-01-26'),
  imageCover,
  artist: 'The Chainsmokers',
  theme: themes.NIGHT,
  license: 'The Chainsmokers 2017',
  tracks: [
    {
      artist: 'The Chainsmokers',
      title: 'Sick Boy',
      duration: 221000,
    },
  ],
  title: 'Sick Boy',
  categorie: 'SINGLE',
  externalUrls: [
    {
      service: 'Spotify',
      url: 'https://spotify.com',
    },
  ],
}
