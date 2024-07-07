import Image from 'next/image';
import Link from 'next/link';

export default function ProjectItem({
  href,
  title,
  position,
  date,
  imagePath
}: {
  href: string;
  title: string;
  position: string;
  date: string;
  imagePath: string;
}) {
  return (
    <Link href={href} target="_blank">
      <div className="project group relative flex justify-between py-2 text-secondary transition-all duration-500 ease-out hover:text-primary">
        <p className="z-[1] w-full text-nowrap">{title}</p>
        <p className="z-[1] w-1/2 text-nowrap text-end md:text-center">
          {position}
        </p>
        <p className="invisible z-[1] w-0 text-nowrap text-end md:visible md:w-full">
          {date}
        </p>
        <div className="pointer-events-none invisible absolute -top-full left-[20%] z-10 h-[20vh] w-[20vw] lg:group-hover:visible">
          <Image
            src={imagePath}
            alt={title}
            width={500}
            height={500}
            className="h-full object-cover"
          />
        </div>
        <span className="absolute bottom-0 z-0 h-full w-full origin-top scale-y-0 bg-secondary transition-transform duration-500 ease-out group-hover:origin-bottom group-hover:scale-y-100"></span>
        <span className="absolute bottom-0 z-0 h-0.5 w-full bg-secondary"></span>
      </div>
    </Link>
  );
}
