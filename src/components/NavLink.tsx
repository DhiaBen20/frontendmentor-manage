import { forwardRef, ReactNode } from "react";

export default forwardRef<
    HTMLAnchorElement,
    {
        href?: string;
        children: ReactNode;
    }
>(function NavLink({ href = "#", children }, ref) {
    return (
        <a
            ref={ref}
            href={href}
            className="text-sm font-medium text-app-gray-700 transition-colors duration-100 outline-none group-data-[highlighted]:text-app-gray-200 hover:text-app-gray-200"
        >
            {children}
        </a>
    );
});
