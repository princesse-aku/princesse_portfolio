import type { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";

type ButtonProps = Omit<ComponentPropsWithoutRef<"a">, "className"> & {
  variant?: "primary" | "dark" | "ghost";
  size?: "md" | "sm";
  external?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  external = false,
  children,
  ...props
}: ButtonProps) {
  const className = [styles.button, styles[variant], size === "sm" && styles.small]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={className}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {children}
    </a>
  );
}
