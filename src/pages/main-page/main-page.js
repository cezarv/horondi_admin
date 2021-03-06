import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';

import { push } from 'connected-react-router';
import Paper from '@material-ui/core/Paper';
import { TableCell, TableRow, Typography } from '@material-ui/core';
import LoadingBar from '../../components/loading-bar';
import TableContainerGenerator from '../../containers/table-container-generator';

import { getComments } from '../../redux/comments/comments.actions';
import { getOrderList } from '../../redux/orders/orders.actions';
import { selectOrderList } from '../../redux/orders/orders.reducer';
import { selectComment } from '../../redux/comments/comments.reducer';
import { commentSelectorWithPagination } from '../../redux/selectors/comments.selectors';
import titles from '../../configs/titles';
import tableHeadRowTitles from '../../configs/table-head-row-titles';
import labels from '../../configs/labels';
import messages from '../../configs/messages';
import routes from '../../configs/routes';

import { useCommonStyles } from '../common.styles';
import { useStyles } from './main-page.styles';

const map = require('lodash/map');

const MainPage = () => {
  const {
    mainTitle,
    commentsTitle,
    ordersTitle,
    changesTitle
  } = titles.mainPageTitles;
  const ordersTableTitles = tableHeadRowTitles.mainPageOrders;
  const { guestUser } = labels.user;
  const { EMPTY_LIST } = messages;
  const { pathToOrders } = routes;
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const dispatch = useDispatch();
  const { list, loading } = useSelector(selectComment);

  const { orderLoading, ordersList } = useSelector(selectOrderList);
  const { rowsPerPage, currentPage } = useSelector(
    commentSelectorWithPagination
  );

  useEffect(() => {
    dispatch(
      getComments({
        pagination: {
          limit: rowsPerPage,
          skip: currentPage * rowsPerPage
        }
      })
    );
  }, [dispatch, rowsPerPage, currentPage]);

  useEffect(() => {
    dispatch(
      getOrderList({
        limit: rowsPerPage,
        skip: currentPage * rowsPerPage,
        filter: {
          orderStatus: 'CREATED'
        }
      })
    );
  }, [dispatch, rowsPerPage, currentPage]);

  const comments = map(list, ({ date, text, user, _id }) => (
    <div key={_id} className={classes.comment}>
      <div className={classes.commentText}>{text}</div>
      <div className={classes.commentInfo}>
        <div>{user.firstName || guestUser}</div>
        <div>{moment.unix(date / 1000).format('HH:mm DD.MM.YYYY ')}</div>
      </div>
    </div>
  ));

  const orders =
    ordersList && ordersList.length
      ? map(ordersList, ({ dateOfCreation, totalItemsPrice, _id }) => (
        <TableRow
          key={_id}
          onClick={() => dispatch(push(`${pathToOrders}/${_id}`))}
          className={classes.order}
          data-cy='order'
        >
          <TableCell>
            {moment.unix(dateOfCreation / 1000).format('DD.MM.YYYY')}
          </TableCell>
          <TableCell>
            {totalItemsPrice[0].value}
            {totalItemsPrice[0].currency} / {totalItemsPrice[1].value}
            {totalItemsPrice[1].currency}
          </TableCell>
          <TableCell>{_id}</TableCell>
        </TableRow>
      ))
      : null;

  if (orderLoading || loading) {
    return <LoadingBar />;
  }

  return (
    <div className={`${commonClasses.container} ${classes.root}`}>
      <Typography
        variant='h3'
        className={commonClasses.materialTitle}
        data-cy='page-title'
      >
        {mainTitle}
      </Typography>
      <div className={classes.main}>
        <div className={classes.commentsOrders}>
          <Paper className={classes.ordersContainer} data-cy='orders-container'>
            <Typography variant='h5' className={classes.blockTitle}>
              {ordersTitle}
            </Typography>
            {ordersList && ordersList.length ? (
              <TableContainerGenerator
                tableItems={orders}
                tableTitles={ordersTableTitles}
                data-cy='orders-table'
              />
            ) : (
              <div className={classes.emptyList} data-cy='empty-orders'>
                {EMPTY_LIST}
              </div>
            )}
          </Paper>
          <Paper
            className={classes.commentsContainer}
            data-cy='comments-container'
          >
            <Typography variant='h5' className={classes.blockTitle}>
              {commentsTitle}
            </Typography>
            <div className={classes.comments}>{comments}</div>
          </Paper>
        </div>
        <Paper className={classes.changesContainer} data-cy='changes-container'>
          <Typography variant='h5' className={classes.blockTitle}>
            {changesTitle}
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default MainPage;
