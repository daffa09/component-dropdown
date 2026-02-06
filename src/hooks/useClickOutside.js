import { useEffect } from "react";
export function useClickOutside(targetRef, onClose) {
    useEffect(() => {
        const handleGlobalClick = (event) => {
            const el = targetRef.current;
            if (el && el.contains(event.target)) {
                return;
            }
            onClose();
        };
        document.addEventListener("mousedown", handleGlobalClick);
        document.addEventListener("touchstart", handleGlobalClick);
        return () => {
            document.removeEventListener("mousedown", handleGlobalClick);
            document.removeEventListener("touchstart", handleGlobalClick);
        };
    }, [targetRef, onClose]);
}
