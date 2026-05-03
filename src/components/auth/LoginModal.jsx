import { useEffect } from "react";
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
            <div
                className="absolute inset-0 bg-[#050816]/60 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            />

            <div className="relative z-10 w-full max-w-md animate-[modalShow_0.3s_ease] rounded-[28px] border border-white/10 bg-[#10182b]/95 p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Закрыть"
                    className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                    ✕
                </button>

                <div className="mb-6 pr-10">
                    <h3 className="text-2xl font-extrabold tracking-tight text-[#f5e2e2]">
                        Вход в Cinema Pizza
                    </h3>
                    <p className="mt-2 text-sm text-white/60">
                        Введите имя и пароль, чтобы войти в свою киношно-пиццерийную вселенную.
                    </p>
                </div>

                <LoginForm onSuccess={onClose} />
            </div>
        </div>
    );
}