import { Search, Moon } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-80 right-0 flex items-center justify-between border-b border-white/10 px-8 py-3 backdrop-blur">
      <button className="flex h-8 w-full max-w-md items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 text-xs text-zinc-300">
        <Search size={14} />
        <span>Find something...</span>
      </button>

      <div className="flex items-center">
        <nav className="flex items-center gap-6 text-sm">
          <a
            className="text-zinc-400 transition-colors hover:text-zinc-100"
            href=""
          >
            API
          </a>
          <a
            className="text-zinc-400 transition-colors hover:text-zinc-100"
            href=""
          >
            Documentation
          </a>
          <a
            className="text-zinc-400 transition-colors hover:text-zinc-100"
            href=""
          >
            Support
          </a>
        </nav>

        <div className="ml-6 flex items-center gap-6 border-l border-white/10 pl-6">
          <button>
            <Moon size={14} className="text-zinc-100" />
          </button>

          <button className="rounded-full border border-cyan-800 bg-cyan-400/10 px-3 py-0.5 text-sm font-medium text-cyan-400 transition-colors hover:border-cyan-400">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
