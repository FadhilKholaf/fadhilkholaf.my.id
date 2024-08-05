export default function Header() {
  return (
    <nav className="pointer-events-none fixed z-50 flex h-8 w-screen items-center justify-end gap-x-2 pr-4 text-secondary mix-blend-difference md:pr-6 lg:h-12">
      {'Front End'}
      <span className="animate-pulse">{'-/</>'}</span>
    </nav>
  );
}
