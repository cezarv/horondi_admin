import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import buttonTitles from '../../../configs/button-titles';
import useSuccessSnackbar from '../../../utils/use-success-snackbar';

const BackButton = ({ type, variant, color, ...props }) => {
  const { openSuccessSnackbar } = useSuccessSnackbar();
  const {
    GO_BACK_TITLE,
    PATTERN_CANCEL_MESSAGE,
    PATTERN_CANCELATION
  } = buttonTitles;
  const history = createBrowserHistory();
  return (
    <Button
      type={type}
      color={color}
      variant={variant}
      onClick={() => {
        openSuccessSnackbar(
          history.goBack,
          PATTERN_CANCEL_MESSAGE,
          PATTERN_CANCELATION,
          true
        );
      }}
      data-cy='back-btn'
      {...props}
    >
      {GO_BACK_TITLE}
    </Button>
  );
};

BackButton.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string
};
BackButton.defaultProps = {
  color: 'primary',
  type: 'button',
  variant: 'outlined'
};

export default BackButton;
