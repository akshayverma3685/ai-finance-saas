import * as React from "react"

/**
 * Card container component
 */
export function Card({ className, children, ...props }) {
  return (
    <div className={`rounded-2xl border bg-white shadow-md p-4 ${className || ""}`} {...props}>
      {children}
    </div>
  )
}

/**
 * Optional: Header section of Card
 */
export function CardHeader({ className, children, ...props }) {
  return (
    <div className={`mb-2 ${className || ""}`} {...props}>
      {children}
    </div>
  )
}

/**
 * Optional: Title inside the header
 */
export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={`text-lg font-semibold ${className || ""}`} {...props}>
      {children}
    </h3>
  )
}

/**
 * Content section of Card
 */
export function CardContent({ className, children, ...props }) {
  return (
    <div className={`text-sm text-gray-600 ${className || ""}`} {...props}>
      {children}
    </div>
  )
}

/**
 * Optional: Footer section of Card
 */
export function CardFooter({ className, children, ...props }) {
  return (
    <div className={`mt-2 ${className || ""}`} {...props}>
      {children}
    </div>
  )
}
