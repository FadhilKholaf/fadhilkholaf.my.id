'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/cn';
import { Project } from '@/utils/types';

export default function ProjectItem({
  project,
  id,
  index,
  opened,
  onClick
}: {
  id: string;
  index: number;
  opened: number | null;
  onClick: () => void;
  project: Project;
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
    <div
      className={cn(
        'group relative flex h-full flex-col text-secondary transition-all duration-300 ease-in-out hover:text-primary hover:delay-0',
        { 'hover:text-secondary': index === opened }
      )}
    >
      <div
        className="flex w-full cursor-pointer items-center justify-between px-2"
        onClick={onClick}
      >
        <p className="z-[1] w-full text-nowrap py-2">{project.title}</p>
        <p className="z-[1] w-1/2 text-nowrap py-2 text-end md:text-center">
          {project.position}
        </p>
        <p className="invisible z-[1] w-0 text-nowrap py-2 text-end md:visible md:w-full">
          {project.date}
        </p>
      </div>
      <div
        className={cn(
          'relative h-0 w-full transition-[height] duration-300 ease-out',
          {
            'h-[600px] sm:h-[500px] lg:h-[50vh]': index === opened
          }
        )}
      >
        <Image
          src={'/images/' + project.imagePath}
          alt={project.title}
          width={500}
          height={500}
          quality={50}
          loading="lazy"
          className={cn(
            'pointer-events-none absolute z-10 h-0 w-0 object-cover object-top px-2 opacity-0 transition-all duration-300 ease-in-out lg:left-[62%] lg:h-fit lg:w-[20%] lg:-translate-y-1/2 lg:group-hover:opacity-100',
            {
              'h-[200px] w-full opacity-100 lg:left-0 lg:mt-4 lg:h-fit lg:w-[30%] lg:-translate-y-0':
                index === opened
            }
          )}
        />
        <div
          className={cn(
            'z-10 flex h-full w-full flex-col justify-between overflow-hidden px-2 opacity-0 transition-opacity lg:pl-[calc(30%+8px)]',
            {
              'pt-[208px] opacity-100 lg:pt-4': index === opened
            }
          )}
        >
          <p
            className={cn(
              '-translate-y-full text-justify transition-all duration-500 ease-out group-hover:text-primary',
              {
                '-translate-y-0 group-hover:text-secondary': index === opened
              }
            )}
          >
            {project.description}
          </p>
          <div className="mb-6 flex justify-end gap-x-8 lg:mb-12 lg:gap-x-16">
            {project.source && (
              <Link
                className="group flex w-fit gap-x-2"
                href={project.source}
                target="_blank"
              >
                Source<span className="text-accent">⇗</span>
              </Link>
            )}
            {project.preview && (
              <Link
                className="group flex w-fit gap-x-2"
                href={project.preview}
                target="_blank"
              >
                Preview<span className="text-accent">⇗</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      <span
        className={cn(
          'absolute top-0 h-full w-full origin-bottom scale-y-0 bg-secondary transition-transform duration-300 ease-in-out group-hover:origin-top group-hover:scale-y-100 group-hover:delay-0',
          {
            'group-hover:scale-y-0 lg:group-hover:origin-bottom':
              index === opened
          }
        )}
      ></span>
      <span
        id={id}
        className="absolute bottom-0 h-0.5 w-full origin-left scale-x-0 bg-secondary transition-transform duration-1000 ease-out"
        style={{ transform: 'scaleX(0)' }}
      ></span>
    </div>
  );
}
