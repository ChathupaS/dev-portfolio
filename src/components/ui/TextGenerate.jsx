import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export default function TextGenerate({ text, className, style, delay = 0, charDelay = 0.035 }) {
  const words = text.split(' ')

  return (
    <div className={cn('', className)} style={style}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: delay + (wi * 5 + ci) * charDelay,
                duration: 0.4,
                ease: 'easeOut',
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  )
}
