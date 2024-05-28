import { Popup, Backdrop, CloseBtn } from './Modal.styled';
import { useEffect, useState } from 'react';
import { IconSvg } from 'components/common/IconSvg';

export const Modal = ({ isOpen, onClose, children }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setTimeout(onClose, 500);
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <Backdrop open={open} onClick={handleBackdropClick}>
      <Popup open={open}>
        <CloseBtn onClick={handleClose}>
          <IconSvg size="32px" icon="close" />
        </CloseBtn>
        <div>{children}</div>
      </Popup>
    </Backdrop>
  );
};
