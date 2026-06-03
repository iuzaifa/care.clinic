import type React from "react";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  leading?: "tight" | "normal" | "relaxed";
  variant?: "default" | "muted" | "success" | "danger" | "inverse" | "dark" | "primary";
};

const sizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const leadingMap = {
  tight: "leading-4",
  normal: "leading-5",
  relaxed: "leading-6",
};

const variantMap = {
  default: "text-gray-700",
  muted: "text-gray-500",
  success: "text-green-600",
  danger: "text-red-600",
  inverse: "text-white",
  dark: "text-black",
  primary : "text-cyan-700"
};

const Paragraph = ({children, className = "" , size  = "sm", leading = "normal", variant = "default" }: ParagraphProps) => {
  return (
    
    <p className={`${sizeMap[size]}  ${leadingMap[leading]} ${variantMap[variant]} ${className}`}>
        {children}
    </p>
  )
}



export default Paragraph;