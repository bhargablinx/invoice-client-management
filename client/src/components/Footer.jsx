import { Link } from "react-router-dom";
import { Globe, Mail, Share2 } from "lucide-react";

const footerLinks = {
    product: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how-it-works" },
        { label: "FAQ", href: "#faq" },
    ],
    account: [
        { label: "Sign In", href: "/login" },
        { label: "Sign Up", href: "/signup" },
        { label: "Dashboard", href: "/dashboard" },
    ],
};

const socialLinks = [
    { icon: Globe, href: "https://github.com/bhargablinx", label: "GitHub" },
    { icon: Mail, href: "mailto:bhargabbhuyan001@gmail.com", label: "Email" },
];

export default function Footer() {
    return (
        <footer className="border-t border-border/50 bg-muted/20 px-4 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link
                            to="/"
                            className="group inline-flex items-center gap-3"
                        >
                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <span className="text-lg font-bold">I</span>
                            </div>
                            <span className="text-lg font-semibold tracking-tight">
                                InClient
                            </span>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                            The modern way to manage invoices, clients, and
                            payments, built for freelancers and growing teams.
                        </p>

                        <div className="mt-6 flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex size-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                                >
                                    <Icon className="size-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold">Product</h4>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold">Account</h4>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.account.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} InClient. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
