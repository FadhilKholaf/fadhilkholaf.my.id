import { useEffect, useRef } from 'react';
import '@/app/globals.css';
import { projects } from '@/utils/data';
import ProjectItem from '../ProjectItem';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;

    if (!section || !heading) return;

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

      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrambleText(heading);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-fit w-screen bg-primary py-12 pl-12 pr-4 text-secondary md:pr-10"
    >
      <h1 ref={headingRef} className="mb-8 text-5xl md:text-7xl">
        PROJECTS
      </h1>
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
            />
          ))}
      </div>
    </section>
  );
}
