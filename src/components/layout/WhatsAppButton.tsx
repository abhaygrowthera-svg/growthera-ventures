import { MessageCircle } from 'lucide-react'
import { company } from '@/data/company'
import { ICON_STROKE } from '@/lib/icons'

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircle strokeWidth={ICON_STROKE} className="h-6 w-6" />
    </a>
  )
}
