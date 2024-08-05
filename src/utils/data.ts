import { Credit, Project } from './types';

export const projects: Project[] = [
  {
    imagePath: 'antareja.png',
    title: 'Antareja',
    position: 'Frontend',
    date: 'May, 2024',
    description:
      'A website for register and maintaining ANTAREJA event in SMK Telkom Malang, writen with Next JS, Prisma ORM, and Postgre SQL for the database',
    preview: 'https://antareja.smktelkom-mlg.sch.id',
    source: 'https://github.com/mokletdev/antareja'
  },
  {
    imagePath: 'ukl.png',
    title: 'UKL XI Absen Ganjil',
    position: 'Backend',
    date: 'May, 2024',
    description:
      'A backend program for level up requirement test 11th grade student in SMK Telkom Malang, writen with Node JS Express',
    source: 'https://github.com/FadhilKholaf/UKL-Node-Backend-Ganjil'
  },
  {
    imagePath: '3.png',
    title: 'Simple Animation',
    position: 'Frontend',
    date: 'June, 2024',
    description:
      'A simple animation implemented on website for learning purpose, writen with Vite React JS',
    preview: 'https://3.fadhilkholaf.my.id'
  },
  {
    imagePath: 'dot.png',
    title: 'PT. DOT Intern Test',
    position: 'Backend',
    date: 'June, 2024',
    description:
      'A backend program writen with Nest JS for applying to PT. DOT intern program',
    source: 'https://github.com/FadhilKholaf/dot-intern'
  },
  {
    imagePath: 'hillaryours.png',
    title: 'Hillaryours',
    position: 'Frontend',
    date: 'June, 2024',
    description: 'A site for Hillary Abigail Fanbase, writen with Next JS',
    preview: 'https://hillaryours.fadhilkholaf.my.id',
    source: 'https://github.com/FadhilKholaf/hillaryours'
  },
  {
    imagePath: 'inagata.png',
    title: 'PT. INAGATA Intern Test',
    position: 'Frontend',
    date: 'July, 2024',
    description:
      'A frontend site for applying to the PT. INAGATA intern program, writen with Next JS',
    preview: 'https://style8.inagata.fadhilkholaf.my.id',
    source: 'https://github.com/FadhilKholaf/PT-INAGATA-Frontend-Test'
  },
  {
    imagePath: 'sefest2024.png',
    title: 'SEFEST 2024 WebDev',
    position: 'Fullstack',
    date: 'July, 2024',
    description:
      'A fullstack site writen using Next JS for SEFEST 2024 competition held by Telkom University Surabaya',
    preview: 'https://templarfeedforward.vercel.app',
    source: 'https://github.com/ahsanzizan/SEFEST24WEBDEV_Templar'
  }
];

export const inspiredBy: Credit[] = [
  {
    name: 'Locomotive',
    category: 'Agency',
    href: 'https://locomotive.ca'
  },
  {
    name: 'Studio Freight',
    category: 'Agency',
    href: 'https://studiofreight.com'
  },
  {
    name: 'Awwwards',
    category: 'Company',
    href: 'https://www.awwwards.com'
  },
  {
    name: 'Quentin Hocdé',
    category: 'Developer',
    href: 'https://quentinhocde.com'
  },
  {
    name: 'Olivier Larose',
    category: 'Developer',
    href: 'https://www.olivierlarose.com'
  },
  {
    name: 'Dragonfly',
    category: 'Venture',
    href: 'https://www.dragonfly.xyz'
  }
];

export const resource: Credit[] = [
  {
    name: 'Tailwind',
    category: 'CSS',
    href: 'https://tailwindcss.com'
  },
  {
    name: 'Next JS',
    category: 'React',
    href: 'https://nextjs.org'
  },
  {
    name: 'Locomotive Scroll',
    category: 'Smooth Scroll',
    href: 'https://locomotivemtl.github.io/locomotive-scroll'
  },
  {
    name: 'Aceternity',
    category: 'UI',
    href: 'https://ui.aceternity.com'
  },
  {
    name: 'React Three Fiber',
    category: '3D',
    href: 'https://docs.pmnd.rs/react-three-fiber'
  }
];

export const social: Credit[] = [
  {
    name: 'fadhilkholaf',
    category: 'Github',
    href: 'https://github.com/FadhilKholaf'
  },
  {
    name: 'fadhilkholaf',
    category: 'Instagram',
    href: 'https://instagram.com/fadhilkholaf'
  },
  {
    name: 'Muhammad Fadhil Kholaf',
    category: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fadhilkholaf'
  }
];
