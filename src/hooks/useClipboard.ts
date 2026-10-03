import { useEffect, useRef, useState } from "react";
export function useClipboard() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  useEffect(
    () => () => {
      clearTimeout(resetTimer.current);
    },
    [],
  );
  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      clearTimeout(resetTimer.current);
      setCopied(true);
      resetTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${text}`;
    }
  }
  return { copied, copy };
}
