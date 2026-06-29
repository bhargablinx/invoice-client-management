const logos = [
    "XYZ Company",
    "ABC Company",
    "DER Company",
    "VBN Company",
    "WER Company",
    "MNP Company",
    "LLM Company",
    "BHB Company",
];

export default function LogoMarquee() {
    const items = [...logos, ...logos];

    return (
        <section className="overflow-hidden border-y border-border/50 bg-muted/30 py-10">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Trusted by growing businesses worldwide
            </p>

            <div className="relative flex">
                <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
                    {items.map((name, i) => (
                        <span
                            key={`${name}-${i}`}
                            className="whitespace-nowrap text-lg font-semibold text-muted-foreground/50 transition-all duration-300 hover:scale-105 hover:text-primary/70"
                        >
                            {name}
                        </span>
                    ))}
                </div>
                <div
                    aria-hidden
                    className="animate-marquee flex shrink-0 items-center gap-12 pr-12"
                >
                    {items.map((name, i) => (
                        <span
                            key={`dup-${name}-${i}`}
                            className="whitespace-nowrap text-lg font-semibold text-muted-foreground/50"
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
}
