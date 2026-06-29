import { useEffect, useState } from "react";

export function useCountUp(end, { duration = 2000, start = 0, enabled = true } = {}) {
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (!enabled) return;

        let startTime = null;
        let frameId;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(start + (end - start) * eased));

            if (progress < 1) {
                frameId = requestAnimationFrame(animate);
            }
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, [end, duration, start, enabled]);

    return count;
}
