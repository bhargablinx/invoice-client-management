import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Customers", href: "#" },
    { label: "FAQ", href: "#" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-4 z-50 px-4">
            <div className="mx-auto max-w-7xl rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl">
                <div className="flex h-18 items-center justify-between px-6 lg:px-8">
                    {/* Logo */}
                    <a href="/" className="group flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <span className="text-lg font-bold">I</span>
                        </div>

                        <span className="text-lg font-semibold tracking-tight">
                            InvoiceFlow
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="group relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                            >
                                {link.label}

                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden items-center gap-3 md:flex">
                        <Button
                            variant="ghost"
                            className="cursor-pointer border-1 border-primary transition-all duration-200 hover:scale-105"
                        >
                            Login
                        </Button>

                        <Button
                            className="
                                cursor-pointer
                                rounded-xl
                                shadow-lg
                                shadow-primary/20
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-xl
                                hover:shadow-primary/30
                            "
                        >
                            Sign Up
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${
                        isOpen
                            ? "max-h-[500px] border-t border-border"
                            : "max-h-0"
                    }`}
                >
                    <div className="space-y-2 px-6 py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="
                                    block
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-sm
                                    font-medium
                                    transition-all
                                    duration-200
                                    hover:bg-accent
                                "
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="mt-6 flex flex-col gap-3">
                            <Button
                                variant="outline"
                                className="w-full border-1 border-primary"
                            >
                                Login
                            </Button>

                            <Button className="w-full">Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
