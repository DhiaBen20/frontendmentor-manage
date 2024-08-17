import clsx from "clsx";
import { ReactNode } from "react";

export default function Button({
    children,
    variant = "primary",
    noShadow = false,
}: {
    children: ReactNode;
    variant?: "primary" | "secondary";
    noShadow?: boolean;
}) {
    return (
        <button
            className={clsx(
                "text-sm rounded-full py-3 px-8 transition-colors duration-100 font-medium",
                {
                    "bg-app-orange-400 text-white hover:bg-app-orange-400/80":
                        variant === "primary",
                    "bg-white text-app-orange-400 hover:text-app-orange-400/60":
                        variant === "secondary",
                    "shadow-lg shadow-app-orange-400/40":
                        !noShadow && variant === "primary",

                    "shadow-lg": !noShadow && variant === "secondary",
                }
            )}
        >
            {children}
        </button>
    );
}
