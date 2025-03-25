import React, { useEffect } from 'react';
import styles from "../Modal/Modal.module.css";

const Modal = ({ show, onClose, children }) => {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
        return () => {
            document.body.style.overflow = 'auto'; // Cleanup on unmount
        };
    }, [show]);

    if (!show) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
