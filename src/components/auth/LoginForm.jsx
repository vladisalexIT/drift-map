import { useState } from "react";
import { useNavigate } from "react-router-dom";

const passwordPattern = /^(?=.*\d).{8,16}$/;

export default function LoginForm({ onSuccess }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        password: "",
    });

    const validateField = (input) => {
        input.setCustomValidity("");

        if (input.name === "name") {
            if (input.validity.valueMissing) {
                input.setCustomValidity("Значение не может быть пустым");
            }
        }

        if (input.name === "password") {
            const value = input.value;

            if (input.validity.valueMissing) {
                input.setCustomValidity("Значение не может быть пустым");
            } else if (input.validity.tooShort) {
                input.setCustomValidity(
                    "Слишком короткое значение, минимальное количество символов - 8"
                );
            } else if (!passwordPattern.test(value)) {
                input.setCustomValidity(
                    "Пароль должен быть длиной от 8 до 16 символов и включать как минимум одну цифру"
                );
            }
        }

        setErrors((prev) => ({
            ...prev,
            [input.name]: input.validationMessage,
        }));

        return input.checkValidity();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        validateField(e.target);
    };

    const handleBlur = (e) => {
        validateField(e.target);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formElements = Array.from(form.elements).filter(
            (el) => el.tagName === "INPUT"
        );

        let isValid = true;

        formElements.forEach((input) => {
            const valid = validateField(input);
            if (!valid) isValid = false;
        });

        if (!isValid) return;

        if (onSuccess) {
            onSuccess();
        }

        navigate("/login-success");
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
                <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#f5e2e2]"
                >
                    Имя
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff7a1a] focus:ring-2 focus:ring-[#ff7a1a]/30"
                    placeholder="Введите имя"
                />
                {errors.name && (
                    <p className="mt-2 text-sm text-[#ff8e8e]">{errors.name}</p>
                )}
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-[#f5e2e2]"
                >
                    Пароль
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    minLength={8}
                    maxLength={16}
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff7a1a] focus:ring-2 focus:ring-[#ff7a1a]/30"
                    placeholder="Введите пароль"
                />
                {errors.password && (
                    <p className="mt-2 text-sm leading-5 text-[#ff8e8e]">
                        {errors.password}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full rounded-2xl bg-[#ff7a1a] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#f06f0f] active:scale-[0.99]"
            >
                Войти
            </button>
        </form>
    );
}