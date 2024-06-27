import { useEffect, useRef } from "react";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";

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
          .split("")
          .map((char, index) => {
            if (index < Math.floor(i / 5)) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

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
      { threshold: 0.1 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen bg-primary pl-12 pr-4 pt-4 text-secondary"
    >
      <h1 ref={headingRef} className="mb-8 text-5xl md:text-7xl">
        PROJECTS
      </h1>
      <div className="flex h-full w-full flex-col text-base md:text-2xl ">
        <Link href="https://github.com/mokletdev/antareja" target="_blank">
          <div className="project group relative flex justify-between py-2 hover:bg-secondary hover:text-primary">
            <p className="w-full text-nowrap ">Antareja</p>
            <p className="w-1/2 text-nowrap text-center">Frontend Developer</p>
            <p className="invisible w-0 text-nowrap text-end md:visible md:w-full">
              Malang, May 2024
            </p>
            <div className="invisible absolute -top-1/2 left-[15%] z-10 h-[20vh] w-[20vw] lg:group-hover:visible">
              <Image
                src="/images/antareja.png"
                alt="antareja"
                width={500}
                height={500}
                className=" h-full object-cover"
              />
            </div>
            <span className="absolute bottom-0 z-0 h-1 w-full bg-secondary"></span>
          </div>
        </Link>
        <Link
          href="https://github.com/FadhilKholaf/Moklet-Merchandise-Remake-Backend"
          target="_blank"
        >
          <div className="project group relative flex justify-between py-2 hover:bg-secondary hover:text-primary">
            <p className="w-full text-nowrap ">Ecommerce</p>
            <p className="w-1/2 text-nowrap text-center">Backend Developer</p>
            <p className="invisible w-0 text-nowrap text-end md:visible md:w-full">
              Malang, April 2024
            </p>
            <div className="invisible absolute -top-1/2 left-[15%] z-10 h-[20vh] w-[20vw] bg-red-50 lg:group-hover:visible">
              <Image
                src="/images/ecommerce.png"
                alt="ecommerce"
                width={500}
                height={500}
                className="h-full object-cover"
              />
            </div>
            <span className="absolute bottom-0 z-0 h-1 w-full bg-secondary"></span>
          </div>
        </Link>
      </div>
    </section>
  );
}
