import importAll from 'utils/importAll'

const articles = importAll(require.context('./', true, /index.jsx?$/))

delete articles['./index.js']

function getId(str) {
  return str.split('/')[1].split('.')[0]
}

export default Object.entries(articles).reduce((acc, cur) => {
  const id = getId(cur[0])
  return { ...acc, [id]: { ...cur[1].default, id } }
}, {})
