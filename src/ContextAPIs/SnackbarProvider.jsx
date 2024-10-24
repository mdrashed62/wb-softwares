import { createContext, useState } from 'react';
import Snackbar from '../Components/Snackbar/Snackbar';

export const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({ message: '', type: '', visible: false });

  const showSnackbar = (message, type = 'success') => {
    setSnackbar({ message, type, visible: true });
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, visible: false });
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      {snackbar.visible && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={closeSnackbar}
        />
      )}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
