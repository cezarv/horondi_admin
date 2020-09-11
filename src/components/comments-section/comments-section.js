import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import TableContainerRow from '../table-container-row';
import TableContainerGenerator from '../table-container-generator';
import { closeDialog } from '../../redux/dialog-window/dialog-window.actions';
import useSuccessSnackbar from '../../utils/use-success-snackbar';
import LoadingBar from '../loading-bar';
import { config } from '../../configs';

import {
  getCommentsByType,
  deleteComment
} from '../../redux/comments/comments.actions';
import { useStyles } from './comments-section.style';

const tableHeaders = config.tableHeadRowTitles.comments;
const { REMOVE_COMMENT_TITLE } = config.buttonTitles;
const { REMOVE_COMMENT_MESSAGE, NO_COMMENTS_MESSAGE } = config.messages;

const CommentsSection = ({ value, commentsType }) => {
  const styles = useStyles();
  const { openSuccessSnackbar } = useSuccessSnackbar();
  const { loading, list } = useSelector(({ Comments }) => ({
    list: Comments.list,
    loading: Comments.commentsLoading
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    getCommentsByType(value, commentsType);
  }, [dispatch, value, commentsType]);

  const commentDeleteHandler = (id) => {
    const removeComment = () => {
      dispatch(closeDialog());
      dispatch(deleteComment(id));
    };
    openSuccessSnackbar(
      removeComment,
      REMOVE_COMMENT_TITLE,
      REMOVE_COMMENT_MESSAGE,
      REMOVE_COMMENT_TITLE
    );
  };

  if (loading) {
    return <LoadingBar />;
  }

  const commentsItems =
    list && list.length >= 1
      ? list.map((commentItem) => (
        <TableContainerRow
          key={commentItem._id}
          id={commentItem._id}
          date={commentItem.date}
          text={commentItem.text}
          deleteHandler={() => commentDeleteHandler(commentItem._id)}
        />
      ))
      : null;

  console.log(list);

  return (
    <div className={styles.container}>
      <TableContainerGenerator
        id='commentsTable'
        tableTitles={commentsItems ? tableHeaders : [NO_COMMENTS_MESSAGE]}
        tableItems={commentsItems}
      />
    </div>
  );
};

CommentsSection.propTypes = {
  value: PropTypes.string.isRequired,
  commentsType: PropTypes.string.isRequired
};

export default CommentsSection;
