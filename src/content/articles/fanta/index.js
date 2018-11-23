import Loadable from 'react-loadable'

import imageCover from '../../../assets/91bd3965372789.5b35307b5609e.png'

const loadablePost = Loadable({
  loader: () => import('./article.md'),
  loading: () => null,
})

// Metadata
export default {
  authors: [
    { name: 'Lorena Restrepo', url: 'https://behance.com' },
    { name: 'Alexa Rodríguez', url: 'https://behance.com' },
  ],
  categorie: 'Art',
  description: null,
  imageCover,
  imageCredits: null,
  loadablePost,
  publishedAt: new Date('2018-07-19'),
  tags: ['Artdirection', 'Reclame', 'Fotografie'],
  theme: 'NIGHT',
  themeColor: 'pink',
  title: 'Stay FANTA',
  updatedAt: null,
}
