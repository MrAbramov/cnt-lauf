import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
} as const;

export function MonitorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="0" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="16" x2="12" y2="20" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3c1 2 1 3 0 5-2 2-2 3 0 5s3 2 5 0c2-1 3-1 5 0l1 3-3 3c-6 0-11-5-11-11l3-3z" />
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.5-1A4.5 4.5 0 0 0 7 17z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <line x1="20" y1="20" x2="15.8" y2="15.8" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <polyline points="9 6 3 12 9 18" />
      <polyline points="15 6 21 12 15 18" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12L12 4l8 8" />
      <path d="M7 11v8h10v-8" />
    </svg>
  );
}

export function ChipIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="0" />
      <line x1="12" y1="2" x2="12" y2="7" />
      <line x1="12" y1="17" x2="12" y2="22" />
      <line x1="2" y1="12" x2="7" y2="12" />
      <line x1="17" y1="12" x2="22" y2="12" />
    </svg>
  );
}

export function FlowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5" cy="6" r="2.1" />
      <circle cx="19" cy="6" r="2.1" />
      <circle cx="12" cy="18" r="2.1" />
      <path d="M6.8 7.6L11 16.5M17.2 7.6L13 16.5" />
    </svg>
  );
}

export function BackupIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.5-1A4.5 4.5 0 0 0 7 17z" />
      <path d="M12 12v5M9.5 14.5L12 17l2.5-2.5" />
    </svg>
  );
}

export function CallIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="0" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="0" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}
