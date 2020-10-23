import { all } from 'redux-saga/effects';
import newsSaga from './news/news.sagas';
import authSaga from './auth/auth.sagas';
import themeSaga from './theme/theme.sagas';
import materialSaga from './material/material.sagas';
import patternSaga from './pattern/pattern.sagas';
import businessPagesSaga from './business-pages/business-pages.sagas';
import productsSaga from './products/products.sagas';
import categorySaga from './categories/categories.sagas';
import usersSaga from './users/users.saga';
import commentsSaga from './comments/comments.sagas';
import contactsSaga from './contact/contact.sagas';
import ordersSaga from './orders/orders.sagas';

export default function* rootSaga() {
  yield all([
    newsSaga(),
    authSaga(),
    themeSaga(),
    categorySaga(),
    usersSaga(),
    materialSaga(),
    patternSaga(),
    businessPagesSaga(),
    productsSaga(),
    contactsSaga(),
    commentsSaga(),
    statsSaga(),
    modelSaga(),
    ordersSaga()
  ]);
}
