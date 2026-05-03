export default function LoginButton({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Открыть форму входа"
            className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#ff7a1a] text-white shadow-sm transition hover:bg-[#f06f0f] active:scale-[0.98] cursor-pointer"
        >
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <path
                    d="M4 20a8 8 0 0 1 16 0"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
        </button>
    );
}