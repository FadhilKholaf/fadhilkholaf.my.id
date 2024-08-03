import { useState } from 'react';

import { projects } from '@/utils/data';
import ProjectItem from '../ProjectItem';

import '@/app/globals.css';

export default function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="min-h-fit w-screen bg-primary py-12 pl-12 pr-4 text-secondary md:pr-10"
      data-scroll
      data-scroll-event-progress="progressEvent"
    >
      <div className="mb-8">
        <h1 className="scramble-text text-5xl md:text-7xl">PROJECTS</h1>
        <p className="text-xs lg:text-base">Click for the details</p>
      </div>
      <div className="flex h-full w-full flex-col text-sm sm:text-base lg:text-2xl">
        {projects &&
          projects.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              id={`animated-span${index}`}
              index={index}
              opened={openProject}
              onClick={() => {
                if (openProject === index) {
                  setOpenProject(null);
                } else {
                  setOpenProject(index);
                }
              }}
            />
          ))}
      </div>
    </section>
  );
}
