import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path = '') {
  const base = 'https://growtheraventures.com'
  if (!path) return base
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
