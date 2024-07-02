import Link from 'next/link';
import React from 'react';

interface NavItem
  extends React.HTMLAttributes<HTMLLIElement> {
  href: string;
  className?: string;
  asChildClassName?: string;
  children: React.ReactNode;
}

function NavItme({
  className,
  href,
  asChildClassName,
  children,
  ...props
}: NavItem) {
  return (
    <li className={className} {...props}>
      <Link href={href} className={asChildClassName}>
        {children}
      </Link>
    </li>
  );
}

export default NavItme;
