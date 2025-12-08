module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Financial theme color palette
                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af", // Main primary color - Deep blue for trust
                    900: "#1e3a8a",
                },
                // Green for growth, success
                success: {
                    50: "#f0fdf4",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#10b981", // Main accent color - Green for growth
                    700: "#15803d",
                    800: "#166534",
                    900: "#14532d",
                },
                // Amber for warnings, alerts
                warning: {
                    50: "#fffbeb",
                    100: "#fef3c7",
                    200: "#fde68a",
                    300: "#fcd34d",
                    400: "#fbbf24",
                    500: "#f59e0b", // Main warning color - Amber
                    600: "#d97706",
                    700: "#b45309",
                    800: "#92400e",
                    900: "#78350f",
                },
                neutral: {
                    50: "#f9fafb", // Soft gray background
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    400: "#9ca3af",
                    500: "#6b7280",
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                    900: "#111827", // Dark gray text
                },
                // Additional semantic colors
                accent: {
                    50: "#ecfeff",
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                    700: "#0e7490",
                    800: "#155e75",
                    900: "#164e63",
                },
                error: {
                    50: "#fef2f2",
                    100: "#fee2e2",
                    200: "#fecaca",
                    300: "#fca5a5",
                    400: "#f87171",
                    500: "#ef4444",
                    600: "#dc2626",
                    700: "#b91c1c",
                    800: "#991b1b",
                    900: "#7f1d1d",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.5s ease-out",
                "bounce-slow": "bounce 2s infinite",
                "pulse-slow": "pulse 3s infinite",
                gradient: "gradient 8s ease infinite",
                float: "float 3s ease-in-out infinite",
                glow: "glow 2s ease-in-out infinite alternate",
                "slide-in-left": "slideInLeft 0.5s ease-out",
                "slide-in-right": "slideInRight 0.5s ease-out",
                "scale-in": "scaleIn 0.3s ease-out",
                shimmer: "shimmer 2s linear infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
                    "100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" },
                },
                slideInLeft: {
                    "0%": { transform: "translateX(-100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideInRight: {
                    "0%": { transform: "translateX(100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.9)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-gradient":
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "modern-gradient":
                    "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
            },
            backdropBlur: {
                xs: "2px",
            },
            boxShadow: {
                glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
                elegant:
                    "0 4px 20px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                "glow-primary": "0 0 20px rgba(59, 130, 246, 0.3)",
                "glow-secondary": "0 0 20px rgba(139, 92, 246, 0.3)",
                neumorphism:
                    "8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8)",
                "neumorphism-inset":
                    "inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.8)",
            },
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography"),
    ],
};
