import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = [
    { label: "Features", to: "#features" },
    { label: "Pricing", to: "#pricing" },
    { label: "Customers", to: "#customers" },
    { label: "FAQ", to: "#faq" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-4 z-50 px-4">
            <div className="mx-auto max-w-7xl rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl">
                <div className="flex h-16 items-center justify-between px-6 lg:px-8">
                    {/* Logo */}
                    <Link to="/" className="group flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <span className="text-lg font-bold">I</span>
                        </div>

                        <span className="text-lg font-semibold tracking-tight">
                            InvoiceFlow
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.label}
                                to={link.to}
                                className={({ isActive }) =>
                                    `group relative text-sm font-medium transition-colors duration-200 ${
                                        isActive
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`
                                }
                            >
                                {link.label}

                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden items-center gap-3 md:flex">
                        <Button
                            asChild
                            variant="ghost"
                            className="border border-primary transition-all duration-200 hover:scale-105"
                        >
                            <Link to="/login">Login</Link>
                        </Button>

                        <Button
                            asChild
                            className="
                                group
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
                            <Link to="/signup">
                                Sign Up
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
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
                            <NavLink
                                key={link.label}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className="block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-accent"
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        <div className="mt-6 flex flex-col gap-3">
                            <Button
                                asChild
                                variant="outline"
                                className="w-full"
                            >
                                <Link
                                    to="/login"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Login
                                </Link>
                            </Button>

                            <Button asChild className="w-full">
                                <Link
                                    to="/signup"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Sign Up
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
