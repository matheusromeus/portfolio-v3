"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>/";

export default function ScrambleText({
  text,
  className,
  style,
  revealEvery = 2,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** frames between each settled character (lower = faster) */
  revealEvery?: number;
}) {
  const [display, setDisplay] = useState(text);
  const raf = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (raf.current !== null) cancelAnimationFrame(raf.current);
    raf.current = null;
  }, []);

  const scramble = useCallback(() => {
    stop();
    const chars = text.split("");
    let frame = 0;
    const run = () => {
      const revealed = Math.floor(frame / revealEvery);
      setDisplay(
        chars
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < revealed) return ch;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );
      frame++;
      if (revealed < chars.length) {
        raf.current = requestAnimationFrame(run);
      } else {
        setDisplay(text);
        raf.current = null;
      }
    };
    run();
  }, [text, revealEvery, stop]);

  useEffect(() => stop, [stop]);

  return (
    <span
      className={className}
      style={style}
      onMouseEnter={scramble}
      onFocus={scramble}
    >
      {display}
    </span>
  );
}
