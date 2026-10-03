
const MainVisuals =() => {
  return (
   <div className="hero-product absolute left-[58%] top-[58%] z-30 -translate-x-1/2 -translate-y-1/2 sm:left-[58%] sm:top-1/2 sm:translate-x-0">
          {/* Motion trail */}

          <div className="hero-trail absolute left-1/2 top-1/2 h-24 w-75 -translate-x-full -translate-y-1/2 rounded-full bg-white/10 blur-3xl sm:h-32 sm:w-125" />

          <div className="relative">
            {/* Outer glow */}

            <div className="absolute inset-0 scale-150 rounded-full bg-white/10 blur-3xl" />

            {/* Orbit */}

            <div className="hero-orbit absolute -inset-5 rounded-full border border-white/10 sm:-inset-8">
              {/* Orbit ball */}

              <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white/80 shadow-lg sm:h-3 sm:w-3" />
            </div>

            {/* Main object */}

            <div className="hero-object relative flex h-44 w-44 items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-2xl backdrop-blur-xl sm:h-64 sm:w-64">
              {/* Inner highlight */}

              <div className="absolute left-5 top-5 h-14 w-14 rounded-full bg-white/20 blur-xl sm:left-8 sm:top-8 sm:h-20 sm:w-20" />

              <span className="hero-mark relative text-4xl font-bold tracking-[0.15em] text-white/80 sm:text-5xl">
                S
              </span>
            </div>
          </div>
        </div>

  )
}

export default MainVisuals