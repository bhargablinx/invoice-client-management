import { useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (options.once !== false) observer.unobserve(element);
                } else if (options.once === false) {
                    setIsInView(false);
                }
            },
            {
                threshold: options.threshold ?? 0.15,
                rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
            },
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [options.once, options.threshold, options.rootMargin]);

    return { ref, isInView };
}
