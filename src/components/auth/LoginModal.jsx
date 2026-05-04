import { useEffect } from "react";
import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";
import LoginForm from "./LoginForm";

export default function LoginModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <ModalOverlay onClick={onClose} />
      
      <ModalContent onClose={onClose}>
        <LoginForm onSuccess={onClose} />
      </ModalContent>
    </div>
  );
}