import React from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "ghost";

type Common = {
  variant?: Variant;
  withIcon?: boolean;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = Common &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export const Button: React.FC<AnchorProps | NativeButtonProps> = ({
  children,
  variant = "primary",
  withIcon = true,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 uppercase font-display";

  const variants: Record<Variant, string> = {
    primary: "bg-white text-black hover:bg-zairo-accent hover:text-white",
    outline: "border border-white/20 text-white hover:bg-white hover:text-black",
    ghost: "text-zairo-muted hover:text-white",
  };

  const cls = `${baseStyles} ${variants[variant]} ${className}`;

  // ✅ href 있으면 a로 렌더 (팝업 차단 없음)
  if ("href" in props && typeof props.href === "string") {
    const { href, ...rest } = props as AnchorProps;
    return (
      <a href={href} className={cls} {...rest}>
        {children}
        {withIcon && <ArrowRight className="w-4 h-4" />}
      </a>
    );
  }

  // ✅ 기본은 button
  return (
    <button className={cls} {...(props as NativeButtonProps)}>
      {children}
      {withIcon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};
