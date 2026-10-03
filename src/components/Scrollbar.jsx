
const Scrollbar = () => {
  return (
     <div className="absolute right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 sm:right-6 md:flex">
        <span className="text-[8px] tracking-[0.25em] text-white/40">01</span>

        <div className="relative h-32 w-px overflow-hidden bg-white/10">
          <div className="hero-progress absolute left-0 top-0 h-full w-full origin-top scale-y-0 bg-white" />
        </div>

        <span className="text-[8px] tracking-[0.25em] text-white/40">02</span>
      </div>
  )
}

export default Scrollbar