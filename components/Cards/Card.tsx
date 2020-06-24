import React from "react";

interface Props {
  title?: string;
  children: React.ReactChild;
  image?: object;
}

const Card = ({ title, children, image }: Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        {title ? <h1 className="text-center">{title}</h1> : null}
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};

export default Card;
