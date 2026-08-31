"use client";

import { useEffect, useState } from "react";
import { announcementMessages } from "@/data/content";

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % announcementMessages.length);
        setVisible(true);
      }, 350);
      return () => clearTimeout(timeout);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const message = announcementMessages[index];

  return (
    <div className="announcement">
      <span className="announcement-track mono" style={{ opacity: visible ? 1 : 0 }}>
        {message.text} <span className="accent">{message.accent}</span>
      </span>
    </div>
  );
}
