// src/components/ui/Button.js
import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary", // "primary" | "secondary" | "danger" | "outline"
  size = "md", // "sm" | "md" | "lg"
  disabled = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 focus:outline-none";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400",
    outline:
      "border border-gray-400 text-gray-700 hover:bg-gray-100 disabled:opacity-50",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const buttonClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
