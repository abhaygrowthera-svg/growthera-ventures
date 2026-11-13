import { motion, useReducedMotion } from 'framer-motion'
import {
  BadgeCheck,
  Briefcase,
  Code2,
  Globe2,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react'
import { ICON_STROKE } from '@/lib/icons'
import { cn } from '@/lib/utils'
import logoMark from '@/assets/logo-mark-light.png'

const hexIcons = [
  { Icon: Briefcase, color: '#6F63C8', x: 50, y: 8 },
  { Icon: Wallet, color: '#2B2550', x: 78, y: 24 },
  { Icon: ShieldCheck, color: '#6F63C8', x: 78, y: 56 },
  { Icon: TrendingUp, color: '#2B2550', x: 50, y: 72 },
  { Icon: Rocket, color: '#6F63C8', x: 22, y: 56 },
  { Icon: Users, color: '#2B2550', x: 22, y: 24 },
  { Icon: Code2, color: '#5649B0', x: 50, y: 40 },
  { Icon: Globe2, color: '#3A335F', x: 64, y: 40 },
  { Icon: BadgeCheck, color: '#A99FE6', x: 36, y: 40 },
]

function Hexagon({
  x,
  y,
  size,
  fill,
  delay,
  children,
  className,
}: {
  x: number
  y: number
  size: number
  fill: string
  delay: number
  children?: React.ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={cn('absolute flex items-center justify-center', className)}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size * 1.1,
        transform: 'translate(-50%, -50%)',
      }}
      initial={reduce ? false : { opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.25 } }}
    >
      <svg viewBox="0 0 100 110" className="absolute inset-0 h-full w-full drop-shadow-md">
        <path
          d="M50 4L92 28V82L50 106L8 82V28L50 4Z"
          fill={fill}
          stroke="#FFFFFF"
          strokeWidth="3"
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export function HexCluster({ className }: { className?: string }) {
  return (
    <div className={cn('relative mx-auto aspect-square w-full max-w-[420px]', className)} aria-hidden="true">
      {/* Ambient soft ring */}
      <div className="absolute inset-[12%] rounded-full bg-purple/20 blur-2xl" />

      {hexIcons.slice(0, 6).map(({ Icon, color, x, y }, index) => (
        <Hexagon key={index} x={x} y={y} size={78} fill={color} delay={0.1 + index * 0.06}>
          <Icon strokeWidth={ICON_STROKE} className="h-6 w-6 text-white" />
        </Hexagon>
      ))}

      {/* Center logo hex */}
      <Hexagon x={50} y={40} size={108} fill="#2B2550" delay={0.05}>
        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          className="relative z-10 h-10 w-10 object-contain"
        />
      </Hexagon>

      {/* Tiny gold accent dots like the PDF */}
      <span className="absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-gold" />
      <span className="absolute bottom-[14%] right-[16%] h-1.5 w-1.5 rounded-full bg-gold" />
      <span className="absolute right-[10%] top-[42%] h-1.5 w-1.5 rounded-full bg-purple-light" />
    </div>
  )
}
