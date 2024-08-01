export default function Home() {
  return (
    <section
      id="home"
      className="flex h-screen w-screen items-center justify-center"
    >
      <p
        className="-z-10 flex h-full w-screen flex-col justify-center pl-12 pr-4 text-[30vw] text-secondary mix-blend-difference sm:text-[20vw] md:text-[15vw] md:pr-10"
        data-scroll
        data-scroll-speed="-0.6"
      >
        <span className="-translate-x-[15%] translate-y-[90%] -rotate-90 md:-translate-x-[0%] md:translate-y-[20%] md:rotate-0">
          FADHIL
        </span>
        <span className="-translate-y-[50%] translate-x-[15%] -rotate-90 text-end sm:-translate-y-[80%] md:-translate-y-[20%] md:translate-x-[0%] md:rotate-0">
          KHOLAF
        </span>
      </p>
    </section>
  );
}
