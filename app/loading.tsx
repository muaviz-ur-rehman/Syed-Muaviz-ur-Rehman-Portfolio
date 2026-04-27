export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-[200] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* abstract loader */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-t-2 border-indigo-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-purple-500 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
          <div className="absolute inset-4 border-b-2 border-white rounded-full animate-spin"></div>
        </div>
        <div className="text-white font-display uppercase tracking-[0.2em] text-sm animate-pulse">
          Loading
        </div>
      </div>
    </div>
  );
}
