import { createSelector } from 'reselect';
import { ARTICLES_CONTENT_TYPE } from 'actions/articles';
import { MUSIC_CONTENT_TYPE } from 'actions/music';
import articles from 'components/articles';
import music from 'components/music';

export const getContent = (state, { contentType }) => {
  if (contentType === ARTICLES_CONTENT_TYPE) {
    return articles;
  }
  if (contentType === MUSIC_CONTENT_TYPE) {
    return music;
  }
  return state.entities[contentType].byId;
};

export const getHighlightId = (state, { contentType, highlightType }) => {
  if (contentType === ARTICLES_CONTENT_TYPE) {
    return articles;
  }
  return state.entities[contentType][highlightType];
};

export const makeGetHighlightedContent = () =>
  createSelector(
    [getContent, getHighlightId],
    content =>
      Object.values(content).sort((a, b) => b.publishedAt - a.publishedAt)[0]
  );
