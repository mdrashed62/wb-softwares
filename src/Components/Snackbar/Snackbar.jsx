import { useEffect, useState } from 'react';
import './Snackbar.css';

const Snackbar = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer); 
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className={`snackbar ${type}`}>
      {message}
    </div>
  );
};

export default Snackbar;
