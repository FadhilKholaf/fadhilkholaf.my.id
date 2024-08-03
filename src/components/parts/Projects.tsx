import { useEffect, useState } from 'react';

import { projects } from '@/utils/data';
import ProjectItem from '../ProjectItem';

import '@/app/globals.css';

export default function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  useEffect(() => {
    const scrambleClass = 'scramble-text';

    function scrambleText(element: HTMLElement) {
      const chars = element.textContent!;
      const originalText = element.innerText;
      const iterations = originalText.length * 5;
      let timeout: ReturnType<typeof setTimeout>;

      function updateText(i: number) {
        if (i >= iterations) {
          element.innerText = originalText;
          return;
        }

        element.innerText = originalText
          .split('')
          .map((char, index) => {
            if (index < Math.floor(i / 5)) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        timeout = setTimeout(() => updateText(i + 1), 15);
      }

      updateText(0);

      return () => {
        clearTimeout(timeout);
      };
    }

    const elements = document.querySelectorAll<HTMLElement>(
      `.${scrambleClass}`
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrambleText(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // () => {
  //   if (openProject === index) {
  //     setOpenProject(null);
  //   } else {
  //     setOpenProject(index);
  //   }
  // }}

  return (
    <section
      id="projects"
      className="min-h-fit w-screen bg-primary py-12 pl-12 pr-4 text-secondary md:pr-10"
      data-scroll
      data-scroll-event-progress="progressEvent"
    >
      <h1 className="scramble-text mb-8 text-5xl md:text-7xl">PROJECTS</h1>
      <div className="flex h-full w-full flex-col lg:text-2xl">
        {projects &&
          projects.map((item, index) => (
            <ProjectItem
              key={index}
              title={item.title}
              position={item.position}
              date={item.date}
              href={item.href}
              imagePath={'/images/' + item.imagePath}
              id={`animated-span${index}`}
              index={index}
              opened={openProject}
            />
          ))}
      </div>
    </section>
  );
}
