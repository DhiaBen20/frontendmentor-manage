import { ComponentPropsWithoutRef } from "react";

export default function Input({ ...props }: ComponentPropsWithoutRef<"input">) {
    return (
        <input type="text" {...props} className="rounded-full bg-white py-3 px-4 placeholder:text-app-gray-200 placeholder:text-sm" />
    );
}
