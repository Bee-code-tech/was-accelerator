// 'use client'
import React from 'react';

interface HeadlineProps {
  title: string;
  align?: 'center' | 'left' | 'right';
  className?: string;
}

const Headline: React.FC<HeadlineProps> = ({ title,  align = 'center', className }) => {
  return (
    <div className={`text-${align} ${className} mb-8`}>
      <h2 className="font-display text-2xl font-bold text-slate-900 relative">
        {title}
      </h2>
    </div>
  );
};

export default Headline;
