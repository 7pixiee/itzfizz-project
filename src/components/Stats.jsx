
const Stats = () => {
  return (
     <div className="absolute inset-x-5 bottom-8 z-40 flex items-end justify-between border-t border-white/10 pt-4 sm:inset-x-8 sm:bottom-15 sm:justify-around sm:pt-6">
        <div className="hero-stat">
          <p className="text-xl font-semibold sm:text-3xl">98%</p>

          <p className="mt-1 text-[7px] tracking-[0.18em] text-white/40 sm:text-[9px] sm:tracking-[0.25em]">
            PERFORMANCE
          </p>
        </div>

        <div className="hero-stat">
          <p className="text-xl font-semibold sm:text-3xl">42+</p>

          <p className="mt-1 text-[7px] tracking-[0.18em] text-white/40 sm:text-[9px] sm:tracking-[0.25em]">
            PROJECTS
          </p>
        </div>

        <div className="hero-stat">
          <p className="text-xl font-semibold sm:text-3xl">12</p>

          <p className="mt-1 text-[7px] tracking-[0.18em] text-white/40 sm:text-[9px] sm:tracking-[0.25em]">
            AWARDS
          </p>
        </div>
      </div>
  )
}

export default Stats