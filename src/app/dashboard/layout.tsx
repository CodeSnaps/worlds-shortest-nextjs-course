import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/123">Dynamic Route</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>{children}</div>
    </div>
  );
}
