import type { ComponentType, SVGProps } from "react";
import {
  MonitorIcon,
  PhoneIcon,
  CloudIcon,
  ShieldIcon,
  SearchIcon,
  CodeIcon,
  HomeIcon,
  ChipIcon,
  FlowIcon,
  BackupIcon,
} from "@/components/icons";

export type Service = {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "N01",
    icon: MonitorIcon,
    title: "Computer & Netzwerke",
    description:
      "Wir richten Ihre Systeme ein, halten sie stabil und optimieren die Leistung, wenn es zäh wird.",
  },
  {
    id: "N02",
    icon: PhoneIcon,
    title: "Telekommunikation",
    description: "Moderne, stabile Kommunikationslösungen für Zuhause und Büro – ohne Aussetzer.",
  },
  {
    id: "N03",
    icon: CloudIcon,
    title: "Cloud-Lösungen",
    description: "Ihre Daten sicher und flexibel erreichbar – von jedem Gerät und jedem Ort aus.",
  },
  {
    id: "N04",
    icon: ShieldIcon,
    title: "IT-Sicherheit & Pentesting",
    description: "Wir prüfen Ihre Systeme aktiv auf Schwachstellen, bevor es andere tun.",
  },
  {
    id: "N05",
    icon: SearchIcon,
    title: "Consulting",
    description: "Wir analysieren Ihre bestehende IT und entwickeln eine Lösung, die zu Ihnen passt.",
  },
  {
    id: "N06",
    icon: CodeIcon,
    title: "Individuelle Programmierung",
    description: "Software, exakt zugeschnitten auf Ihren Ablauf – kein Standard von der Stange.",
  },
  {
    id: "N07",
    icon: HomeIcon,
    title: "Heimautomatisierung (IoT)",
    description: "Von smarter Beleuchtung bis vernetzter Sicherheitstechnik – aufeinander abgestimmt.",
  },
  {
    id: "N08",
    icon: ChipIcon,
    title: "Künstliche Intelligenz",
    description: "KI-Lösungen, die echte Abläufe messbar schneller machen.",
  },
  {
    id: "N09",
    icon: FlowIcon,
    title: "Automatisierung mit n8n",
    description: "Wir verknüpfen Ihre Werkzeuge, damit wiederkehrende Handgriffe automatisch laufen.",
  },
];

export const processSteps = [
  {
    id: "SCHRITT · 01",
    title: "Anfrage stellen",
    description: "Kurze Beschreibung per Telefon, E-Mail oder persönlich.",
  },
  {
    id: "SCHRITT · 02",
    title: "Diagnose",
    description: "Erste Einschätzung, bei Bedarf zur Pauschale auf Anfrage.",
  },
  {
    id: "SCHRITT · 03",
    title: "Fernwartung oder Vor-Ort",
    description: "Fernzugriff spart 10 % der Arbeitszeit; vor Ort 3,50 € je Kilometer.",
  },
  {
    id: "SCHRITT · 04",
    title: "Transparente Abrechnung",
    description: "Minutengenau nach angefangener Viertelstunde – keine versteckten Kosten.",
  },
];

export const priceRows = [
  { label: "Fernwartung", value: "−10 % Arbeitszeit" },
  { label: "Vor-Ort-Termin ab Büro", value: "3,50 € / km" },
  { label: "Voranalyse", value: "Pauschale auf Anfrage" },
  { label: "Bürotätigkeiten (OS-Install., Hardware-Umbau u. Ä.)", value: "Pauschal abgerechnet" },
  { label: "Abendstunden", value: "Kein Zuschlag" },
  { label: "Wochenende & Feiertag", value: "+25 % Zuschlag" },
];

export const certifications = [
  {
    icon: ChipIcon,
    title: "KI-Beauftragter",
    date: "Zertifiziert am 17.09.2025",
  },
  {
    icon: ShieldIcon,
    title: "IT-Sicherheit & Pentesting",
    date: "Zertifiziert am 26.10.2024",
  },
  {
    icon: BackupIcon,
    title: "Backup Compliance-Spezialist",
    date: "Zertifiziert am 04.10.2024",
  },
];

export const announcementMessages = [
  { text: "Zertifiziert: KI-Beauftragter", accent: "— 17.09.2025" },
  { text: "Zertifiziert: IT-Sicherheit & Pentesting", accent: "— 26.10.2024" },
  { text: "Zertifiziert: Backup Compliance-Spezialist", accent: "— 04.10.2024" },
];

export const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#preise", label: "Preise" },
  { href: "#zertifizierungen", label: "Zertifizierungen" },
  { href: "#kontakt", label: "Kontakt" },
];
