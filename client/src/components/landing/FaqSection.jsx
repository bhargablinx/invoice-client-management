import { ChevronDown } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { useState } from "react";

const faqs = [
    {
        question: "Is InClient free to use?",
        answer: "Yes! InClient offers a free plan with core invoicing and client management features. You can support anytime as your business grows.",
    },
    {
        question: "Can I manage multiple organizations?",
        answer: "Absolutely. Create separate organizations for different businesses, switch between them instantly, and invite team members with role-based permissions.",
    },
    {
        question: "How do I track payments?",
        answer: "Record payments against invoices manually, view outstanding balances per client, and monitor your revenue dashboard for real-time insights.",
    },
    {
        question: "Can I invite my team?",
        answer: "Yes. Send email invitations to team members, assign roles like admin or member, and collaborate on clients and invoices together.",
    },
    {
        question: "Is my data secure?",
        answer: "Your data is encrypted in transit and at rest. We follow industry best practices to keep your business information safe and private.",
    },
];

function FaqItem({ faq, index, isInView }) {
    const [open, setOpen] = useState(false);

    return (
        <Collapsible
            open={open}
            onOpenChange={setOpen}
            className={cn(
                "rounded-2xl border border-border/60 bg-card/50 transition-all duration-300 hover:border-primary/30",
                open && "border-primary/30 shadow-md shadow-primary/5",
                isInView && "animate-in fade-in slide-in-from-bottom-4",
            )}
            style={{
                animationDelay: `${index * 80}ms`,
                animationFillMode: "both",
            }}
        >
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:text-primary">
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                    className={cn(
                        "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                        open && "rotate-180 text-primary",
                    )}
                />
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2">
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                </p>
            </CollapsibleContent>
        </Collapsible>
    );
}

export default function FaqSection() {
    const { ref, isInView } = useInView();

    return (
        <section id="faq" className="px-4 py-24" ref={ref}>
            <div className="mx-auto max-w-3xl">
                <div
                    className={cn(
                        "text-center",
                        isInView &&
                            "animate-in fade-in slide-in-from-bottom-4 duration-700",
                    )}
                >
                    <p className="text-sm font-medium uppercase tracking-wider text-primary">
                        FAQ
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Everything you need to know before getting started.
                    </p>
                </div>

                <div className="mt-12 space-y-3">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={faq.question}
                            faq={faq}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
