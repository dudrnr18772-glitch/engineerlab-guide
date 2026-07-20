"use client";

import { useRef, useState } from "react";

export function CopyCodeButton({ label = "코드 복사" }: { label?: string }) {
  const [message, setMessage] = useState("");
  const hiddenInput = useRef<HTMLInputElement>(null);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText("e7288");
    } catch {
      hiddenInput.current?.select();
      document.execCommand("copy");
    }
    setMessage("e7288이 복사되었습니다.");
  }

  return <div className="copy-wrap">
    <input ref={hiddenInput} className="copy-fallback" readOnly value="e7288" aria-hidden="true" tabIndex={-1} />
    <button type="button" onClick={copyCode}>{label}<span aria-hidden="true">⧉</span></button>
    <span className="copy-status" role="status" aria-live="polite">{message}</span>
  </div>;
}
