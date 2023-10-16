import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AlertContext = createContext();
export default AlertContext;

export function AlertProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  return (
    <AlertContext.Provider
      value={{
        open,
        setOpen,
        severity,
        setSeverity,
        message,
        setMessage,
        error,
        setError,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
