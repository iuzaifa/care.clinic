import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

type CardImageProps = {
  src: string;
  alt: string;
};

const Card = ({ children, className = "" }: CardProps) => {
  return <div className={`rounded-xl  ${className}`}>{children}</div>;
};

const CardTitle = ({ children, className = "" }: CardTitleProps) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
};

const CardContent = ({ children, className = "" }: CardContentProps) => {
  return <div className={`mt-2 ${className}`}>{children}</div>;
};

const CardImage = ({ src, alt }: CardImageProps) => {
  return <img src={src} alt={alt} className="w-full h-52 object-cover rounded-t-xl" />;
};

export { Card, CardTitle, CardContent, CardImage };
