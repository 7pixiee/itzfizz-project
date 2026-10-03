

const NavigationBar = () => {
  return (
     <header className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
          <div className="hero-brand text-base font-bold tracking-[0.25em] sm:text-lg sm:tracking-[0.3em]">
            MOVE
          </div>

          <nav className="hidden gap-10 text-xs tracking-[0.2em] text-white/60 md:flex">
            <span>WORK</span>
            <span>ABOUT</span>
            <span>PROCESS</span>
          </nav>

          <button className="rounded-full border border-white/30 px-4 py-2 text-[10px] tracking-widest transition hover:bg-white hover:text-black sm:px-5 sm:text-xs">
            MENU ↗
          </button>
        </header>
  )
}

export default NavigationBar