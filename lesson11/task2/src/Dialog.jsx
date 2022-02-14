import React from "react";

const Dialog = ({ isOpen, onClose, children, title }) => {
   if (!isOpen) {
      return null;
   }
   return (
      <div className="dialog">
         <div className="dialog__heading">
            <div className="dialog__title">{title}</div>
            <button className="dialog__close-btn" onClick={onClose}>+</button>
         </div>
        <div className="dialog__content">{children}</div> 
      </div>
   );
}

export default Dialog;