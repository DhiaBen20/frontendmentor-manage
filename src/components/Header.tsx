import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import NavLink from "./NavLink";
import bgPatter from "../assets/bg-tablet-pattern.svg";

function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);

    const mediaRef = useRef(matchMedia("(max-width: 767px)"));

    useEffect(() => {
        const query = mediaRef.current;

        if (query.matches) {
            setShowMobileNav(true);
        }
    }, []);

    useEffect(() => {
        const query = mediaRef.current;

        function handleMediaChange(e: MediaQueryListEvent) {
            if (e.matches) setShowMobileNav(true);
            if (!e.matches) setShowMobileNav(false);
            if (!e.matches && isOpen) setIsOpen(false);
        }

        query.addEventListener("change", handleMediaChange);

        return () => query.removeEventListener("change", handleMediaChange);
    }, [isOpen]);

    return (
        showMobileNav && (
            <Dropdown.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dropdown.Trigger className="group">
                    <Menu className="group-data-[state=open]:hidden" />
                    <X className="group-data-[state=closed]:hidden" />
                </Dropdown.Trigger>
                {isOpen && <div className="fixed inset-0 bg-black/20" />}

                <Dropdown.Portal>
                    <Dropdown.Content className="rounded py-8 mx-4 mt-8 shadow-lg bg-white w-[calc(var(--radix-dropdown-menu-content-available-width)-theme(spacing.8))] flex flex-col gap-6 items-center">
                        <Dropdown.Item className="outline-none group">
                            <NavLink>Pricing</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className="outline-none group">
                            <NavLink>Product</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className="outline-none group">
                            <NavLink>About Us</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className="outline-none group">
                            <NavLink>Careers</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className="outline-none group">
                            <NavLink>Community</NavLink>
                        </Dropdown.Item>
                    </Dropdown.Content>
                </Dropdown.Portal>
            </Dropdown.Root>
        )
    );
}

export default function Header() {
    return (
        <header className="flex justify-between items-center py-8 md:py-12 max-w-6xl mx-auto px-4 relative">
            <img
                src={bgPatter}
                alt=""
                className="absolute -z-10 right-0 top-0 -translate-y-32 translate-x-32 md:translate-x-2/4 md:-translate-y-1/3 xl:translate-x-1/3 xl:-translate-y-1/4"
            />

            <a href="#">
                <img src={logo} alt="Manage logo" />
            </a>

            <MobileNavigation />

            <nav className="hidden md:flex items-center gap-8">
                <NavLink>Pricing</NavLink>
                <NavLink>Product</NavLink>
                <NavLink>About Us</NavLink>
                <NavLink>Careers</NavLink>
                <NavLink>Community</NavLink>
            </nav>

            <div className="hidden md:block">
                <Button>Get Started</Button>
            </div>
        </header>
    );
}
