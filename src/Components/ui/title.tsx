import React from 'react';

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className = "" }) => {
  return (
    <div className={`bg-gradient-to-b from-green-700 to-green-500 bg-clip-text text-transparent font-semibold lg:text-2xl text-xl  ${className}`}>
      {text}
    </div>
  );
};

export default Title;