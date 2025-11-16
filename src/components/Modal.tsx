import React from 'react';
import { AnimatePresence, motion, easeOut } from 'framer-motion';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  maxWidthClass?: string;        // e.g. "max-w-xl", "max-w-2xl" (default)
  closeOnBackdrop?: boolean;     // default: true
  showCloseButton?: boolean;     // default: true
  initialScale?: number;         // default: 0.98
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  maxWidthClass = 'max-w-2xl',
  closeOnBackdrop = true,
  showCloseButton = true,
  initialScale = 0.98,
  children,
}) => {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnBackdrop ? onClose : undefined}
          />
          <motion.div
            className="fixed inset-0 z-70 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: initialScale, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: initialScale, y: 10 }}
            transition={{ duration: 0.25, ease: easeOut }}
            role="dialog"
            aria-modal="true"
          >
            <div
              className={`relative w-full ${maxWidthClass} rounded-2xl border border-white/10 bg-[#111118]/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.4)]`}
              onClick={(e) => e.stopPropagation()}
            >
              {(title || showCloseButton) && (
                <div className="flex items-start justify-between p-6 border-b border-white/5">
                  <div className="text-white text-xl font-semibold tracking-wide">
                    {title}
                  </div>
                  {showCloseButton && (
                    <button
                      onClick={onClose}
                      className="text-[#CFCFD8] hover:text-white transition-colors"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  )}
                </div>
              )}
              <div className="p-6">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;