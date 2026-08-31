"use client";

import { useLayoutEffect } from "react";

export default function TopOffset() {
  useLayoutEffect(() => {
    const announcement = document.querySelector<HTMLElement>(".announcement");
    const header = document.querySelector<HTMLElement>(".site-header");

    function update() {
      const total = (announcement?.offsetHeight ?? 0) + (header?.offsetHeight ?? 0);
      document.documentElement.style.setProperty("--header-stack-height", `${total}px`);
    }

    update();

    const ro = new ResizeObserver(update);
    if (announcement) ro.observe(announcement);
    if (header) ro.observe(header);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
