import Link from 'next/link';
import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import { inspiredBy, resource, social } from '@/utils/data';
import CreditsItem from '../CreditsItem';

export default function Credits() {
  return (
    <section
      id="credits"
      className="flex min-h-screen w-screen flex-wrap items-center bg-primary py-12 pb-4 pl-12 pr-4 text-secondary md:pr-10"
    >
      <div className="flex w-full flex-wrap justify-between">
        <div className="mb-8 flex w-auto flex-col gap-y-4">
          <h1 className="text-5xl md:text-7xl">Socials</h1>
          {social &&
            social.map((item, index) => (
              <CreditsItem
                name={item.name}
                href={item.href}
                category={item.category}
                key={index}
                symbol="@"
              />
            ))}
          <span className="flex flex-wrap gap-4">
            <span>fadhilgd123@gmail.com</span>
          </span>
        </div>

        <div className="mb-8 flex w-auto flex-col gap-y-4">
          <h1 className="text-5xl md:text-7xl">Resources</h1>
          {resource &&
            resource.map((item, index) => (
              <CreditsItem
                key={index}
                href={item.href}
                name={item.name}
                category={item.category}
                symbol="#"
              />
            ))}
          <span className="flex flex-wrap gap-4">
            <span>Courier Prime</span>
            <span>#000000</span>
            <span>#F5F5F5</span>
            <span>#007BFF</span>
          </span>
        </div>
        <div className="mb-8 flex w-auto flex-col gap-y-4">
          <h1 className="text-5xl md:text-7xl">Inspired By</h1>
          {inspiredBy &&
            inspiredBy.map((item, index) => (
              <CreditsItem
                key={index}
                category={item.category}
                name={item.name}
                href={item.href}
                symbol="*"
              />
            ))}
        </div>
      </div>
      <div className="relative h-[50vh] w-full rounded border border-secondary">
        {/* <BackgroundBeams /> */}
      </div>
    </section>
  );
}
