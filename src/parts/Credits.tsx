"use client";

import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ASCII, EffectComposer } from "@react-three/postprocessing";
import { useState } from "react";

export default function Credits() {
  const [model, setmodel] = useState<any>(true);
  const [ascii, setAscii] = useState<any>(false);

  return (
    <section
      id="credits"
      className="flex min-h-screen flex-wrap items-center bg-primary py-12 pb-4 pl-12 pr-4 text-secondary"
    >
      <div className="flex w-full flex-wrap justify-between">
        <div className="mb-8 flex w-auto flex-col gap-y-4">
          <h1 className="text-5xl md:text-7xl">Inspired By</h1>
          <span>
            <span className="animate-pulse text-lg md:text-2xl">
              {"Agency - "}
            </span>
            <Link
              href="https://locomotive.ca/en"
              className=" text-lg underline md:text-2xl"
            >
              Locomotive
            </Link>
            <span className="animate-pulse text-lg md:text-2xl">{" - /*"}</span>
          </span>
          <span>
            <span className="animate-pulse text-lg md:text-2xl">
              {"Agency - "}
            </span>
            <Link
              href="https://studiofreight.com"
              className=" text-lg underline md:text-2xl"
            >
              Studio Freight
            </Link>
            <span className="animate-pulse text-lg md:text-2xl">{" - /*"}</span>
          </span>
          <span>
            <span className="animate-pulse text-lg md:text-2xl">
              {"Company - "}
            </span>
            <Link
              href="https://www.awwwards.com"
              className=" text-lg underline md:text-2xl"
            >
              Awwwards
            </Link>
            <span className="animate-pulse text-lg md:text-2xl">{" - /*"}</span>
          </span>
          <span>
            <span className="animate-pulse text-lg md:text-2xl">
              {"Developer - "}
            </span>
            <Link
              href="https://quentinhocde.com"
              className=" text-lg underline md:text-2xl"
            >
              Quentinhocde
            </Link>
            <span className="animate-pulse text-lg md:text-2xl">{" - /*"}</span>
          </span>
          <span>
            <span className="animate-pulse text-lg md:text-2xl">
              {"Venture - "}
            </span>
            <Link
              href="https://www.dragonfly.xyz"
              className=" text-lg underline md:text-2xl"
            >
              Dragonfly
            </Link>
            <span className="animate-pulse text-lg md:text-2xl">{" - /*"}</span>
          </span>
        </div>
        <div className="mb-8 flex w-auto flex-col gap-y-4">
          <h1 className="text-5xl md:text-7xl">Source</h1>
          <span>
            <span className="animate-pulse text-lg md:text-2xl">
              {"React - "}
            </span>
            <Link
              href="https://nextjs.org"
              className=" text-lg underline md:text-2xl"
            >
              NextJS
            </Link>
            <span className="animate-pulse text-lg md:text-2xl">{" - /#"}</span>
          </span>
          <span>
            <span className="animate-pulse text-lg md:text-2xl">
              {"CSS - "}
            </span>
            <Link
              href="https://tailwindcss.com"
              className=" text-lg underline md:text-2xl"
            >
              Tailwind
            </Link>
            <span className="animate-pulse text-lg md:text-2xl">{" - /#"}</span>
          </span>
          <span>
            <span className="animate-pulse text-lg md:text-2xl">
              {"Smooth Scroll - "}
            </span>
            <Link
              href="https://locomotivemtl.github.io/locomotive-scroll"
              className=" text-lg underline md:text-2xl"
            >
              Locomotive Scroll
            </Link>
            <span className="animate-pulse text-lg md:text-2xl">{" - /#"}</span>
          </span>
          <span>
            <span className="animate-pulse text-lg md:text-2xl">{"3D - "}</span>
            <Link
              href="https://docs.pmnd.rs/react-three-fiber"
              className=" text-lg underline md:text-2xl"
            >
              React Three Fiber
            </Link>
            <span className="animate-pulse text-lg md:text-2xl">{" - /#"}</span>
          </span>
          <span className=" flex gap-4">
            <span>#000000</span>
            <span>#F5F5F5</span>
            <span>#007BFF</span>
          </span>
        </div>
        <div className="mb-8 flex w-auto flex-col gap-y-4">
          <h1 className="text-5xl md:text-7xl">Socials</h1>
          <span>
            <span className="animate-pulse text-lg md:text-2xl">
              {"Instagram - "}
            </span>
            <Link
              href="https://instagram.com/fadhilkholaf"
              className=" text-lg underline md:text-2xl"
            >
              fadhilkholaf
            </Link>
            <span className="animate-pulse text-lg md:text-2xl">{" - /@"}</span>
          </span>
          <span>
            <span className="animate-pulse text-lg md:text-2xl">
              {"Email - "}
            </span>
            <span className=" text-lg md:text-2xl">fadhilgd123@gmail.com</span>
            <span className="animate-pulse text-lg md:text-2xl">{" - /@"}</span>
          </span>
        </div>
      </div>
      <div className="relative h-[50vh] w-full cursor-grab rounded border border-secondary">
        <h1
          onClick={() => {
            setmodel(!model);
          }}
          className="absolute left-4 top-2 z-10 cursor-pointer"
        >
          Show Model : {model ? "On" : "Off"}
        </h1>
        <h1
          onClick={() => {
            setAscii(!ascii);
          }}
          className="absolute left-4 top-8 z-10 cursor-pointer"
        >
          ASCII Effect : {ascii ? "On" : "Off"}
        </h1>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} />
          <OrbitControls
            enableDamping={false}
            enablePan={false}
            autoRotateSpeed={2}
            enableZoom={false}
            autoRotate
          />
          {model && (
            <mesh scale={7} position={[0, -0.5, 0]}>
              <boxGeometry />
              <meshNormalMaterial />
            </mesh>
          )}
          <EffectComposer>{ascii && <ASCII />}</EffectComposer>
        </Canvas>
      </div>
    </section>
  );
}
