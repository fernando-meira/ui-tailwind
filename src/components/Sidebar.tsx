import { Logo } from './icons/Logo';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-80 border-r border-white/10 p-6">
      <Logo className="h-4 w-auto text-white" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-sm font-medium text-zinc-100">Guides</strong>

          <div className="flex flex-col pl-2 text-sm">
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              Introduction
            </a>
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              Quickstart
            </a>
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              SDKs
            </a>
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              Authentication
            </a>
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              Pagination
            </a>
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              Erros
            </a>
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              Webhooks
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <strong className="text-sm font-medium text-zinc-100">
            Resources
          </strong>

          <div className="flex flex-col pl-2 text-sm">
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              Contacts
            </a>
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              Conversations
            </a>
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              Messages
            </a>
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              Groups
            </a>
            <a
              className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white"
              href=""
            >
              Attachments
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
}
