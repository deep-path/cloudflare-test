import React, { useState } from 'react';
import { openInNewTab } from '@/utils/openNewTab';
type FooterLinkProps = {
  children: React.ReactNode;
  href: string;
};

export const FooterLink: React.FC<FooterLinkProps> = ({ children, href }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    openInNewTab(href);
    setClicked(true);
  };

  const handleMouseLeave = () => {
    setClicked(false);
  };

  const divClass = `mb-4 cursor-pointer whitespace-nowrap text-gray-60 text-sm font-normal ${
    clicked ? '' : 'hover:text-green-10 hover:opacity-100'
  }`;

  return (
    <div className={divClass} onClick={handleClick} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
};
