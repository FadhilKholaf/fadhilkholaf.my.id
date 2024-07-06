import { Credit } from '@/utils/types';
import Link from 'next/link';

export default function CreditsItem({ category, name, href, symbol }: Credit) {
  return (
    <span>
      <span className="animate-pulse text-lg md:text-2xl">
        {category + ' - '}
      </span>
      <Link
        href={href}
        target="_blank"
        className="text-lg underline md:text-2xl"
      >
        {name}
      </Link>
      <span className="animate-pulse text-lg md:text-2xl">
        {' - /' + symbol}
      </span>
    </span>
  );
}
