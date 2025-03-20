export function RedBeam() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main horror beams */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-6 bg-red-900/30 blur-3xl transform rotate-45 animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-4 bg-red-800/20 blur-xl transform -rotate-30"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[100%] h-5 bg-red-900/25 blur-2xl transform rotate-12"></div>

      {/* Pulsating blood-like effects */}
      <div className="absolute top-1/4 left-1/4 w-[50%] h-16 bg-red-900/10 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-[40%] h-12 bg-red-800/15 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Horror vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/70 pointer-events-none"></div>

      {/* Subtle blood splatter effects */}
      <div className="absolute top-[15%] left-[10%] w-32 h-32 bg-red-900/10 blur-xl rounded-full"></div>
      <div className="absolute top-[75%] right-[15%] w-40 h-24 bg-red-900/15 blur-xl rounded-full transform rotate-45"></div>
      <div className="absolute top-[40%] right-[25%] w-24 h-36 bg-red-900/10 blur-xl rounded-full transform -rotate-12"></div>
    </div>
  )
}

