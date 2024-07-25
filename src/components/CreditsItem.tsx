import { Credit } from '@/utils/types';
import Link from 'next/link';

export default function CreditsItem({ category, name, href, symbol }: Credit) {
  return (
    <span>
      <span className="animate-pulse md:text-2xl">{category + ' - '}</span>
      <Link
        href={href}
        target="_blank"
        className="relative after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-full after:origin-left after:scale-x-100 after:bg-secondary after:transition-transform after:duration-300 after:ease-out hover:after:origin-right hover:after:scale-x-0 lg:text-2xl"
      >
        {name}
      </Link>
      <span className="animate-pulse md:text-2xl">{' - /' + symbol}</span>
    </span>
  );
}
