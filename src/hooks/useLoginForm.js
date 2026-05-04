import { useState } from "react";
import { useNavigate } from "react-router-dom";

const passwordPattern = /^(?=.*\d).{8,16}$/;

export default function useLoginForm({ onSuccess }) {
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

        if (input.name === "password" && input.value) {
            if (!passwordPattern.test(input.value)) {
                input.setCustomValidity(
                    "Пароль должен содержать минимум одну цифру"
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
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
        validateField(e.target);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        let isValid = true;

        Array.from(form.elements).forEach((input) => {
            if (input.tagName === "INPUT") {
                const valid = validateField(input);
                if (!valid) isValid = false;
            }
        });

        if (!isValid) return;

        onSuccess?.();
        navigate("/login-success");
    };

    return {
        formData,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}