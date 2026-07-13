import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const FooterItem = ({ title, children, className }: Props) => {
  return (
    <>
      <div className={`space-y-2  pr-4 ${className ?? ""}`}>
        <h3 className={`font-bold text-cyan-700 text-xl`}>{title}</h3>
        <div className="text-sm text-gray-600 space-y-1">{children}</div>
      </div>
    </>
  );
};

export default FooterItem;
