import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { RenderIcon } from '@/lib/renderIcon'
import type { Stat } from '@/types'

export default function CounterStat({ value, suffix, label, icon }: Stat) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 group">
      <div className="w-8 h-8 flex items-center justify-center mb-2">
        <RenderIcon name={icon} size={22} className="text-gold/70" />
      </div>
      <div className="text-4xl md:text-5xl font-black text-gold leading-none">
        {inView ? (
          <CountUp end={value} duration={2.5} separator="," suffix={suffix} />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="mt-2 text-sm md:text-base text-ink/60 font-semibold uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}
