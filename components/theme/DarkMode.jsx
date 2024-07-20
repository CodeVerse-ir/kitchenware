"use client";

import { useEffect } from 'react';

export default function DarkMode({ darkMode }) {
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

    }, [darkMode]);
}  