import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ProjectItem({
  href,
  title,
  position,
  date,
  imagePath,
  id,
  index
}: {
  href: string;
  title: string;
  position: string;
  date: string;
  imagePath: string;
  id: string;
  index: number;
}) {
  useEffect(() => {
    const getProgress = (e: any) => {
      const { progress } = e.detail;
      if (progress >= 0.3) {
        document
          .getElementById(id)!
          .setAttribute(
            'style',
            `transform: scaleX(1); transition-delay: ${index * 100}ms;`
          );
      }
    };

    window.addEventListener('progressEvent', getProgress);
  }, [id, index]);

  return (
    <Link href={href} target="_blank">
      <div className="project group relative flex justify-between py-2 text-secondary transition-all delay-100 duration-100 ease-out hover:text-primary hover:delay-0">
        <p className="z-[1] w-full text-nowrap">{title}</p>
        <p className="z-[1] w-1/2 text-nowrap text-end md:text-center">
          {position}
        </p>
        <p className="invisible z-[1] w-0 text-nowrap text-end md:visible md:w-full">
          {date}
        </p>
        <div className="pointer-events-none invisible absolute -top-full right-[18%] z-10 h-fit w-[20vw] lg:group-hover:visible">
          <Image
            src={imagePath}
            alt={title}
            width={500}
            height={500}
            className="h-full object-cover"
          />
        </div>
        <span className="absolute bottom-0 z-0 h-full w-full origin-top scale-y-0 bg-secondary transition-transform delay-100 duration-100 ease-out group-hover:origin-bottom group-hover:scale-y-100 group-hover:delay-0"></span>
        <span
          id={id}
          className="absolute bottom-0 z-0 h-0.5 w-full origin-left scale-x-0 bg-secondary transition-transform duration-[2000ms] ease-in-out"
          style={{ transform: 'scaleX(0)' }}
        ></span>
      </div>
    </Link>
  );
}
