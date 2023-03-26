import NavLink from './NavLink';
import { Logo } from './icons/Logo';

export function Sidebar() {
  const guidesLinkInfo = [
    { href: 'a', text: 'Introduction' },
    { href: 'b', text: 'Quickstart' },
    { href: 'c', text: 'SDKs' },
    { href: 's', text: 'Authentication' },
    { href: 'e', text: 'Pagination' },
    { href: 'f', text: 'Erros' },
    { href: 'g', text: 'Webhooks' },
  ];

  const resourcesLinkInfo = [
    { href: 'h', text: 'Contacts' },
    { href: 'i', text: 'Conversation' },
    { href: 'j', text: 'Messages' },
    { href: 'k', text: 'Groups' },
    { href: 'l', text: 'Attachments' },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-80 border-r border-white/10 p-6">
      <Logo className="h-4 w-auto text-white" />

      <nav className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-sm font-medium text-zinc-100">Guides</strong>

          <div className="flex flex-col pl-2 text-sm">
            {guidesLinkInfo.map((link) => (
              <NavLink key={link.text} href={`/test/${link.href}`}>
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <strong className="text-sm font-medium text-zinc-100">
            Resources
          </strong>

          <div className="flex flex-col pl-2 text-sm">
            {resourcesLinkInfo.map((link) => (
              <NavLink key={link.text} href={`/test/${link.href}`}>
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
