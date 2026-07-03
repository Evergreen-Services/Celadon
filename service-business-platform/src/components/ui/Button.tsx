import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const base =
  "inline-flex items-center justify-center rounded-md px-6 py-3 font-medium transition-opacity hover:opacity-90 text-center";

const variants = {
  primary: "bg-[var(--color-primary)] text-white",
  secondary: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent",
};

export default function Button({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}