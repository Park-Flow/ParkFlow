import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
  open,
  setOpen,
  message,
  severity,
}) {
  CustomizedSnackbars.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    message: PropTypes.string,
    severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  };

  const vertical = 'top';
  const horizontal = 'right';

  const handleClose = async (event, reason) => {
    try {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        TransitionComponent={Slide}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
