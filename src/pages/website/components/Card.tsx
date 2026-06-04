import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

type CardTitleProps = {
  children: ReactNode;
};

type CardContentProps = {
  children: ReactNode;
};

type CardImageProps = {
  src: string;
  alt: string;
};

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`rounded-xl bg-white  ${className}`}>
      {children}
    </div>
  );
};

const CardTitle = ({ children }: CardTitleProps) => {
  return (
    <h3 className="text-xl font-semibold text-slate-900">
      {children}
    </h3>
  );
};

const CardContent = ({ children }: CardContentProps) => {
  return (
    <div className="mt-2 text-slate-600">
      {children}
    </div>
  );
};

const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-52 object-cover rounded-lg"
    />
  );
};


export { Card, CardTitle, CardContent , CardImage};