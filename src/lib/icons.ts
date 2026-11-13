import {
  BadgeCheck,
  Briefcase,
  Building2,
  Calculator,
  Code2,
  Cpu,
  Factory,
  FileSearch,
  Globe2,
  GraduationCap,
  HardHat,
  HeartHandshake,
  HeartPulse,
  Megaphone,
  Rocket,
  Scale,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Wallet,
  Wheat,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  Briefcase,
  Building2,
  Calculator,
  Code2,
  Cpu,
  Factory,
  FileSearch,
  Globe2,
  GraduationCap,
  HardHat,
  HeartHandshake,
  HeartPulse,
  Megaphone,
  Rocket,
  Scale,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Wallet,
  Wheat,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Briefcase
}

export const ICON_STROKE = 1.75
