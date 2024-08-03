export default function Home() {
  return (
    <section
      id="home"
      className="flex h-screen w-screen items-center justify-center"
    >
      <p
        className="-z-10 flex h-full w-screen flex-col justify-center pl-12 pr-4 text-[30vw] tracking-widest text-secondary mix-blend-difference sm:text-[20vw] md:pr-10 md:text-[15vw]"
        data-scroll
        data-scroll-speed="-0.6"
      >
        <span className="flex -translate-x-[15%] translate-y-[90%] -rotate-90 items-center md:-translate-x-[0%] md:translate-y-[20%] md:rotate-0">
          <span className="-translate-y-4 pl-8">ƒ</span>
          AD
          <span className="rotate-12">H</span>
          IĿ
        </span>
        <span className="flex -translate-y-[80%] translate-x-[15%] -rotate-90 items-center justify-end text-end sm:-translate-y-[80%] md:-translate-y-[20%] md:translate-x-[0%] md:rotate-0">
          <span className="rotate-12">K</span>H
          <span className="translate-y-4 text-[28vw] sm:text-[17vw] md:text-[12vw]">
            ◌
          </span>
          L<span className="rotate-12">A</span>F
        </span>
      </p>
    </section>
  );
}
