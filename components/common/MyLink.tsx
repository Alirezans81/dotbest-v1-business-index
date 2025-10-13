import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  label?: string;
  href: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function Button({ label, children, className, href }: Props) {
  return (
    <Link
      className={`transition-all duration-300 rounded-full px-6 py-2 text-lg border border-gray_004 hover:bg-primary hover:!border-primary hover:text-white ${className}`}
      href={href}
    >
      {label || children || ""}
    </Link>
  );
}
