import { themes } from 'actions/ui'
import imageCover from 'assets/daytona.jpg'

// Metadata
export default {
  themeColor: 'pink',
  theme: themes.NIGHT,
  publishedAt: new Date('2018-07-01'),
  imageCover,
  artist: 'Pusha T',
  title: 'DAYTONA',
  categorie: 'ALBUM',
  genre: 'Hip-Hop/Rap',
  description:
    'Back when he was still one-half of Clipse, Pusha-T dazzled listeners of the Virginia duo\'s mixtape series We Got It 4 Cheap by annihilating popular beats of the day. The project\'s sole criticism was that the production was already so good, it could carry anyone. DAYTONA, copiloted by hip-hop production genius Kanye West, upends that conceit, with contemporary boom-bap built from luscious soul samples that would swallow a lesser MC. With Pusha at the absolute top of his game, DAYTONA is somehow more than the sum of its parts, a fact the rapper acknowledges proudly on "The Games We Play": "To all of my young n****s/I am your Ghost and your Rae/This is my Purple Tape."',
  license:
    '2018 Getting Out Our Dreams, Inc./Def Jam Recordings, a division of UMG Recordings, Inc.',
  tracks: [
    {
      artist: 'Pusha T',
      title: 'If You Know You Know',
      duration: 124000,
    },
    {
      artist: 'Pusha T',
      title: 'The Games We Play',
      duration: 211000,
    },
    {
      artist: 'Pusha T feat. Rick Ross',
      title: 'Hard Piano',
      duration: 154000,
    },
    {
      artist: 'Pusha T',
      title: 'Come Back Baby',
      duration: 198000,
    },
    {
      artist: 'Pusha T',
      title: 'Santeria',
      duration: 124000,
    },
    {
      artist: 'Pusha T feat. Kanye West',
      title: 'What Would Meek Do?',
      duration: 129000,
    },
    {
      artist: 'Pusha T',
      title: 'Infrared',
      duration: 211000,
    },
  ],
  externalUrls: [
    {
      service: 'Apple Music',
      url: 'https://itunes.apple.com/us/album/daytona/1388853738',
    },
  ],
}
