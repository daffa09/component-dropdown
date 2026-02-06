import { useEffect } from "react";

export function useClickOutside(
  targetRef: React.RefObject<HTMLElement | null>,
  onClose: () => void
) {
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const el = targetRef.current;

      if (el && el.contains(event.target as Node)) {
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