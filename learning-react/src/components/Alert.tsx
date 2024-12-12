import { ReactNode } from "react";

interface AlertProps {
    children : ReactNode;
    onClose: () => void;
}

const Alert = ( { children, onClose }: AlertProps ) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
        <strong>{children}</strong>
        <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert