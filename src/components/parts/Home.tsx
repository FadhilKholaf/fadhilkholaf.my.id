export default function Home() {
  return (
    <section
      id="home"
      className="flex h-screen w-screen items-center justify-center"
    >
      <p
        className="-z-10 flex h-full w-screen flex-col justify-center px-12 text-[20vw] text-secondary mix-blend-difference md:text-[15vw]"
        data-scroll
        data-scroll-speed="-0.5"
      >
        <span className="-translate-x-[15%] translate-y-[90%] -rotate-90 md:-translate-x-[0%] md:translate-y-[20%] md:rotate-0">
          FADHIL
        </span>
        <span className="-translate-y-[90%] translate-x-[15%] -rotate-90 text-end md:-translate-y-[20%] md:translate-x-[0%] md:rotate-0">
          KHOLAF
        </span>
      </p>
    </section>
  );
}
