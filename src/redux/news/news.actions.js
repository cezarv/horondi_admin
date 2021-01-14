import {
  GET_NEWS,
  SET_NEWS,
  SET_NEWS_LOADING,
  DELETE_ARTICLE,
  ADD_ARTICLE,
  GET_ARTICLE,
  SET_ARTICLE,
  UPDATE_ARTICLE,
  SET_NEWS_ERROR,
  SET_CURRENT_PAGE,
  SET_NEWS_PER_PAGE,
  SET_PAGES_COUNT,
  REMOVE_ARTICLE_FROM_STORE
} from './news.types';

const setNews = (news) => ({
  type: SET_NEWS,
  payload: news
});

const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload
});

const setNewsPerPage = (payload) => ({
  type: SET_NEWS_PER_PAGE,
  payload
});

const setPagesCount = (payload) => ({
  type: SET_PAGES_COUNT,
  payload
});

const getNews = (payload) => ({
  type: GET_NEWS,
  payload
});

const deleteArticle = (payload) => ({
  type: DELETE_ARTICLE,
  payload
});

const addArticle = (payload) => ({
  type: ADD_ARTICLE,
  payload
});

const setNewsLoading = (loading) => ({
  type: SET_NEWS_LOADING,
  payload: loading
});

const updateArticle = (payload) => ({
  type: UPDATE_ARTICLE,
  payload
});

const setArticle = (payload) => ({
  type: SET_ARTICLE,
  payload
});

const getArticle = (payload) => ({
  type: GET_ARTICLE,
  payload
});

const setNewsError = (error) => ({
  type: SET_NEWS_ERROR,
  payload: error
});

const removeArticleFromStore = (payload) => ({
  type: REMOVE_ARTICLE_FROM_STORE,
  payload
});

export {
  setNews,
  getNews,
  setNewsLoading,
  deleteArticle,
  addArticle,
  updateArticle,
  setArticle,
  getArticle,
  setNewsError,
  setCurrentPage,
  setNewsPerPage,
  setPagesCount,
  removeArticleFromStore
};
