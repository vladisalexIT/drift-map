export default function SpaceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#020410]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.1),_transparent_40%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.01)_1px,_transparent_1px),linear-gradient(to_right,_rgba(255,255,255,0.01)_1px,_transparent_1px)] bg-[size:100px_100px] opacity-20" />

      <div className="absolute left-[-20%] top-[30%] h-[1px] w-[400px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-[1px] animate-floatLine" />
      <div className="absolute right-[-20%] top-[70%] h-[1px] w-[400px] bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent blur-[1px] animate-floatLineReverse" />

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div key={i} className={`star star-${i + 1}`} />
        ))}
      </div>

      <div className="absolute inset-0 opacity-40">
        <div className="dust top-[15%] left-[10%] w-[180px] height-[1px]" />
        <div className="dust top-[45%] left-[70%] w-[220px] height-[1px]" style={{ animationDelay: '2s' }} />
        <div className="dust top-[80%] left-[25%] w-[150px] height-[1px]" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
}