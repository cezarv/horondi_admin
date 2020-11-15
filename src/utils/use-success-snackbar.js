import { useDispatch } from 'react-redux';
import { showDialog } from '../redux/dialog-window/dialog-window.actions';

const useSuccessSnackbar = () => {
  const dispatch = useDispatch();

  const openSuccessSnackbar = (
    onClickHandler,
    dialogTitle,
    dialogContent,
    buttonTitle,
    showIcon,
    showCancelButton = true,
    buttonStyle = 'standart',
  ) => {
    dispatch(
      showDialog({
        isOpen: true,
        dialogTitle,
        dialogContent,
        buttonTitle,
        onClickHandler,
        showIcon,
        showCancelButton,
        buttonStyle,
      })
    );
  };

  return { openSuccessSnackbar };
};

export default useSuccessSnackbar;
