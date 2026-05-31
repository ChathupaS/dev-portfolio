import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export default function MovingBorder({ children, className, containerClassName, duration = 5 }) {
  return (
    <div className={cn('relative p-[2px] rounded-xl overflow-hidden', containerClassName)}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-4"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, #06b6d4 120deg, #8b5cf6 240deg, transparent 360deg)',
        }}
      />
      <div className={cn('relative rounded-[10px] bg-[#0a0a1a]', className)}>
        {children}
      </div>
    </div>
  )
}
